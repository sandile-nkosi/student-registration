class Registration {
  constructor(modules = []) {
    this.modules = modules
  }

  addModule(module) {
    const moduleItem = {
      grade: grade,
      cost: cost
    }
    // Implement logic for pre-requisites
    if (module.grade < 50 ) {
      console.log('Pre-requisite error')
    } else {

      moduleItem.cost = cost;
      this.modules.push(moduleItem)
    }
    
  }
}