// Primary Color Minerals
let vanadinite = extend(OverlayFloor, "vanadinite", {
  mapColor: Color.valueOf("#ED3F00"),
  useColor: true
});
let adamite = extend(OverlayFloor, "adamite", {
  mapColor: Color.valueOf("#A7BC40"),
  useColor: true
});
let chalcanthite = extend(OverlayFloor, "chalcanthite", {
  mapColor: Color.valueOf("#24B6FC"),
  useColor: true
});
let hotNiebieskite = extend(Floor, "niebieskite-hot", {});
hotNiebieskite.attributes.set(Attribute.heat, 0.5);

module.exports = {
  vanadinite: vanadinite,
  adamite: adamite,
  chalcanthite: chalcanthite,
  hotNiebieskite: hotNiebieskite
};