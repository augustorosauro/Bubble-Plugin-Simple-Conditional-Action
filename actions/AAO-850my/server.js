function(properties, context) {
    // Read variables from the properties object
    var condition = properties.condition;
    var yesReturn = properties.yesReturn;
    var noReturn = properties.noReturn;

    var result;

    // Analyze the condition
    if (condition === true) {
        // If condition is true, assign yesReturn to result
        result = yesReturn;
    } else {
        // If condition is false, assign noReturn to result
        result = noReturn;
    }

    // Return the calculated result
    return { result: result};
}
