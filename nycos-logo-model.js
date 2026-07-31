function buildShapesFromAlpha(T, mask, gw, gh, worldW, worldH) {
  var th = 0.5;
  function val(x, y) { return mask[y * gw + x]; }
  var segs = [];
  function interp(ax, ay, av, bx, by, bv) {
    var t = (th - av) / (bv - av);
    return [ax + (bx - ax) * t, ay + (by - ay) * t];
  }
  for (var j = 0; j < gh - 1; j++) {
    for (var i = 0; i < gw - 1; i++) {
      var tl = val(i, j);
      var tr = val(i + 1, j);
      var br = val(i + 1, j + 1);
      var bl = val(i, j + 1);
      var c = (tl >= th ? 1 : 0) | (tr >= th ? 2 : 0) | (br >= th ? 4 : 0) | (bl >= th ? 8 : 0);
      if (c === 0 || c === 15) continue;
      var Tf = function () { return interp(i, j, tl, i + 1, j, tr); };
      var Rf = function () { return interp(i + 1, j, tr, i + 1, j + 1, br); };
      var Bf = function () { return interp(i, j + 1, bl, i + 1, j + 1, br); };
      var Lf = function () { return interp(i, j, tl, i, j + 1, bl); };
      var avg = (tl + tr + br + bl) / 4;
      switch (c) {
        case 1: segs.push([Lf(), Tf()]); break;
        case 2: segs.push([Tf(), Rf()]); break;
        case 3: segs.push([Lf(), Rf()]); break;
        case 4: segs.push([Rf(), Bf()]); break;
        case 5:
          if (avg >= th) { segs.push([Lf(), Tf()]); segs.push([Rf(), Bf()]); }
          else { segs.push([Tf(), Rf()]); segs.push([Bf(), Lf()]); }
          break;
        case 6: segs.push([Tf(), Bf()]); break;
        case 7: segs.push([Lf(), Bf()]); break;
        case 8: segs.push([Bf(), Lf()]); break;
        case 9: segs.push([Tf(), Bf()]); break;
        case 10:
          if (avg >= th) { segs.push([Tf(), Lf()]); segs.push([Bf(), Rf()]); }
          else { segs.push([Tf(), Rf()]); segs.push([Lf(), Bf()]); }
          break;
        case 11: segs.push([Rf(), Bf()]); break;
        case 12: segs.push([Lf(), Rf()]); break;
        case 13: segs.push([Tf(), Rf()]); break;
        case 14: segs.push([Lf(), Tf()]); break;
      }
    }
  }
  // undirected chaining: each interior crossing point has degree 2, regardless
  // of per-case segment direction, so walk the point-adjacency graph directly.
  function key(p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }
  var adj = new Map(); // key -> [{segIdx, other}]
  segs.forEach(function (s, segIdx) {
    var k0 = key(s[0]), k1 = key(s[1]);
    if (!adj.has(k0)) adj.set(k0, []);
    if (!adj.has(k1)) adj.set(k1, []);
    adj.get(k0).push({ segIdx: segIdx, other: s[1] });
    adj.get(k1).push({ segIdx: segIdx, other: s[0] });
  });
  var segUsed = new Array(segs.length).fill(false);
  var loops = [];
  for (var segIdx0 = 0; segIdx0 < segs.length; segIdx0++) {
    if (segUsed[segIdx0]) continue;
    segUsed[segIdx0] = true;
    var p0 = segs[segIdx0][0];
    var cur = segs[segIdx0][1];
    var loop = [p0];
    var guard = 0;
    while (key(cur) !== key(p0) && guard++ < segs.length + 5) {
      loop.push(cur);
      var candidates = adj.get(key(cur)) || [];
      var found = null;
      for (var ci = 0; ci < candidates.length; ci++) {
        if (!segUsed[candidates[ci].segIdx]) { found = candidates[ci]; break; }
      }
      if (!found) break;
      segUsed[found.segIdx] = true;
      cur = found.other;
    }
    if (loop.length > 2) loops.push(loop);
  }
  function contains(poly, p) {
    var inside = false;
    for (var k = 0, l = poly.length - 1; k < poly.length; l = k++) {
      var pk = poly[k], pl = poly[l];
      var xi = pk[0], yi = pk[1], xj = pl[0], yj = pl[1];
      var hit = (yi > p[1]) !== (yj > p[1]) && p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi;
      if (hit) inside = !inside;
    }
    return inside;
  }
  var containment = loops.map(function (loop, li) {
    var count = 0;
    loops.forEach(function (other, oi) {
      if (oi === li) return;
      if (contains(other, loop[0])) count++;
    });
    return count;
  });
  var scaleX = worldW / gw;
  var scaleY = worldH / gh;
  function toWorld(p) { return [(p[0] - gw / 2) * scaleX, (gh / 2 - p[1]) * scaleY]; }
  var solids = [];
  loops.forEach(function (loop, li) {
    if (containment[li] % 2 === 1) return;
    var pts = loop.map(function (p) { var w = toWorld(p); return new T.Vector2(w[0], w[1]); });
    var shape = new T.Shape(pts);
    solids.push({ shape: shape, li: li, depth: containment[li] });
  });
  loops.forEach(function (loop, li) {
    if (containment[li] % 2 === 0) return;
    var best = null, bestDepth = -1;
    solids.forEach(function (s) {
      if (s.li === li) return;
      if (contains(loops[s.li], loop[0]) && s.depth > bestDepth) { best = s; bestDepth = s.depth; }
    });
    if (best) {
      var pts = loop.map(function (p) { var w = toWorld(p); return new T.Vector2(w[0], w[1]); });
      var path = new T.Path(pts);
      best.shape.holes.push(path);
    }
  });
  return solids.map(function (s) { return s.shape; });
}

export async function boot() {
  var stage = document.querySelector('three-d-stage');
  var stageCtx = await stage.ready;
  var T = stageCtx.THREE;

  var img = new Image();
  img.src = './assets/logo-mark.png';
  await new Promise(function (res, rej) { img.onload = res; img.onerror = rej; });

  var GW = 240;
  var GH = Math.round(240 * img.height / img.width);
  var canvas = document.createElement('canvas');
  canvas.width = GW; canvas.height = GH;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, GW, GH);
  ctx.drawImage(img, 0, 0, GW, GH);
  var data = ctx.getImageData(0, 0, GW, GH).data;
  var mask = new Float32Array(GW * GH);
  for (var i = 0; i < GW * GH; i++) mask[i] = data[i * 4 + 3] / 255;

  var worldW = 1.3;
  var worldH = worldW * GH / GW;
  var shapes = buildShapesFromAlpha(T, mask, GW, GH, worldW, worldH);

  var logoDepth = 0.12;
  var extrudeSettings = { depth: logoDepth, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 3, curveSegments: 6 };
  var logoGeom = new T.ExtrudeGeometry(shapes, extrudeSettings);
  logoGeom.rotateX(-Math.PI / 2);
  var logoMat = new T.MeshPhysicalMaterial({ color: 0xC8102E, roughness: 0.32, metalness: 0.05, clearcoat: 0.55, clearcoatRoughness: 0.25 });
  var logoMesh = new T.Mesh(logoGeom, logoMat);
  logoMesh.name = 'LogoMark';
  logoMesh.castShadow = false; logoMesh.receiveShadow = false;

  logoMesh.position.y = 0.002;

  var group = new T.Group();
  group.add(logoMesh);

  stage.setObject(group);
  if (stage._camera && stage._controls) {
    var box = new T.Box3().setFromObject(group);
    var sphere = box.getBoundingSphere(new T.Sphere());
    var dist = (sphere.radius / Math.tan((stage._camera.fov * Math.PI) / 360)) * 1.35;
    var finalDir = new T.Vector3(0.1, 1, 0.42).normalize();
    var startDir = new T.Vector3(0.4, 0.82, 0.75).normalize();
    stage._controls.target.copy(sphere.center);
    stage._camera.position.copy(sphere.center).add(startDir.clone().multiplyScalar(dist));
    stage._controls.update();
    var cancelled = false;
    stage._controls.addEventListener('start', function () { cancelled = true; });
    var t0 = performance.now();
    var durMs = 1400;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function step(now) {
      if (cancelled) return;
      var p = Math.min(1, (now - t0) / durMs);
      var e = ease(p);
      var dir = startDir.clone().lerp(finalDir, e).normalize();
      stage._camera.position.copy(sphere.center).add(dir.multiplyScalar(dist));
      stage._controls.update();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (stage._ground) stage._ground.visible = false;
  group.traverse(function (o) { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
}
