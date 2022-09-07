export function comparingShorts(shorts, data) {
  
      let filteredArray = [];
      //compare statistics data from server to user keys (links). Find links (info) which were created by user
      data.find(function (element1) {
        let matched = shorts.find(function (element2) {
          return element1.short === element2;
        });
        if (matched != null) filteredArray.push(element1);
      });

      return filteredArray;
}
