// my solution
const recycle = array => {
    let paper   = [],
        glass   = [],
        organic = [],
        plastic = [];
    
    array.forEach(item => {
      for (ele in item) {
        if (ele !== 'type') {
          switch (item[ele]) {
              case 'paper':
                paper.push(item.type);
                break;
              case 'glass':
                glass.push(item.type);
                break;
              case 'organic':
                organic.push(item.type);
                break;
              case 'plastic':
                plastic.push(item.type);
                break;
          };
        }
      }
    });    
    return [paper, glass, organic, plastic];    
};

// best practice
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}