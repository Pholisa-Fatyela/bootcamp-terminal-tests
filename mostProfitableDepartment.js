module.exports = function mostProfitableDepartment(salesData) {
    var departmentSalesMap = {};

    for (var i = 0; i < salesData.length; i++) {
        var currentDepartment = salesData[i].department;
        if (departmentSalesMap[currentDepartment] === undefined) {
            departmentSalesMap[currentDepartment] = 0;
        }
        departmentSalesMap[currentDepartment] = departmentSalesMap[currentDepartment] + salesData[i].sales;
    }

    var mostSales = 0;
    var departmentMostSales = '';
    
    for (var i in departmentSalesMap) {
        var currentDept = departmentSalesMap[i];
        if (currentDept > mostSales) {
            mostSales = currentDept;
            departmentMostSales = i;
        }
    }
    return departmentMostSales;
}