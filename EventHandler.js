/** Author
 *           Name: Marthinus Ettienne
 *        Surname: van Zyl
 * Student Number: u19012366
 */

// Task 1:

function EventHandler(array){
    this.array = array;

    this.getEventsBetweenDates = function (start, end){
        var startDate = Date.parse(start);
        var endDate = Date.parse(end);
        var startFromDateFilteredArray = this.array.filter((e) => {
            return Date.parse(e.dateStart) >= startDate;
        });
        return startFromDateFilteredArray.filter((e) => {
            return Date.parse(e.dateEnd) <= endDate;
        });
    }

    this.getByMonth = function (month){
        return this.array.filter((e) => {
            var currDate = new Date(Date.parse(e.dateStart));
            return currDate.getMonth() == Number.parseInt(month)-1;
        });
    }

    this.getUniqueDateAndSort = function() {
        return this.array.sort((a, b) => { 
            let itemOne = new Date(Date.parse(a.dateStart));
            let itemTwo = new Date(Date.parse(b.dateStart));
            return itemOne - itemTwo;
        }).reduce((arr, curr) => {
            if(arr.filter((s) => s.dateStart == curr.dateStart ).length == 0)
            {
                arr.push(curr);
                return arr;
            }
            return arr;
        }, []);
    }

    this.getSummary = function(...objects) {
        return objects.reduce((arr, curr) => {
            if(Array.isArray(curr))
            {
                curr.filter((c) => {
                    (c.dateStart == c.dateEnd) 
                    ?
                    arr.push(`On ${c.dateStart}: ${c.name}(${c.description})`)
                    :
                    arr.push(`From ${c.dateStart} to ${c.dateEnd}: ${c.name}(${c.description})`);
                });
            }
            else
            {
                (curr.dateStart == curr.dateEnd) 
                ?
                arr.push(`On ${curr.dateStart}: ${curr.name}(${curr.description})`)
                :
                arr.push(`From ${curr.dateStart} to ${curr.dateEnd}: ${curr.name}(${curr.description})`);
            }
            return arr;

        }, []);
    } 

    //Task 2:

    Array.prototype.getEventsBetweenDates = this.getEventsBetweenDates;
    Array.prototype.getByMonth = this.getByMonth;
    Array.prototype.getUniqueDateAndSort = this.getUniqueDateAndSort;
    Array.prototype.getSummary = this.getSummary;
}