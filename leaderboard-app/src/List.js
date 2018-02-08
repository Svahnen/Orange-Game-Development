import React, { Component } from 'react'

let fakeServerData = {
    team: [
        {
            time: 1215,
            name: 'Team Strawberry',
            ID: '1'
        },
        {
            time: 1725,
            name: 'Team Pear',
            ID: '2'
        },
        {
            time: 1615,
            name: 'Team Melon',
            ID: '3'
        },
        {
            time: 1744,
            name: 'Team Grape',
            ID: '4'
        },
        {
            time: 2515,
            name: 'Team Banana',
            ID: '5'
        }
    ]

}
class List extends Component {
    

    render() {

        // Sort function of array.time
        function CompareForSort(first, second) {
            let firstTime = first.time
            let secondTime = second.time
            if (firstTime === secondTime)
                return 0;
            if (firstTime < secondTime)
                return -1;
            else
                return 1;
        }

        // Convert second to minutes and add :
        function convertToMin(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

        // Sorts and then maps server data
        let list = fakeServerData.team.sort(CompareForSort).map(team => {
            return (
                <div key={team.ID} className="Table">
                    <h3>{team.name}</h3> <h2>{convertToMin(team.time)}</h2>
                </div>
            )
        })
        return list

    }
}

export default List;
