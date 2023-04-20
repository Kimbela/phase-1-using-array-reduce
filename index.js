const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryReducer(batteryBatches) {
    return batteryBatches.reduce((total, batch) => total + batch, 0);
  }
  
  const totalBatteries = batteryReducer(batteryBatches);
