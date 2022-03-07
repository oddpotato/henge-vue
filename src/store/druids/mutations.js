export default {
    retrieveDruids(state) {
        console.log('Hello this triggered');
        fetch('https://hengejsontest-default-rtdb.firebaseio.com/druids.json').then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            const results = []
            for (const id in data) {
                results.push({ id: id, firstname: data[id].firstname, lastname: data[id].lastname, picture: data[id].picture, beardlength: data[id].beardlength, gods: data[id].gods, robecolor: data[id].robecolor, ritual: data[id].ritual, bio: data[id].bio });
            }
            state.listofdruids = results
            console.log("The result is " + state.listofdruids)
        });
    },
    deleteDruid(state, payload) {
        let id = payload
        state.isdeleting = true
        console.log(id)
        console.log('delete triggered')
        fetch(`https://hengejsontest-default-rtdb.firebaseio.com/druids/${id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        }).then(() => {
            state.isdeleting = false
            this.retrieveDruids();
        })
    },
    addDruid(context, payload) {
        console.log('submit triggered')
        console.log(payload.firstname)
        fetch('https://hengejsontest-default-rtdb.firebaseio.com/druids.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: payload.firstname,
                lastname: payload.lastname,
                picture: payload.picture,
                beardlength: payload.beardlength,
                gods: payload.gods,
                robecolor: payload.robecolor,
                ritual: payload.ritual,
                bio: payload.bio
            })
        })
    },
    updateDruid(state, payload) {
        console.log(payload)
        let id = payload.id
        console.log(id)
        console.log(state)
        fetch(`https://hengejsontest-default-rtdb.firebaseio.com/druids/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                firstname: payload.firstname,
                lastname: payload.lastname,
                picture: payload.picture,
                beardlength: payload.beardlength,
                gods: payload.gods,
                robecolor: payload.robecolor,
                ritual: payload.ritual,
                bio: payload.bio
            })
        })
    },
    getBeardLength(state) {
        console.log('mutation has triggered')
        for (let i = 0; i < state.listofdruids.length; i++) {
            let beard = state.listofdruids[i].beardlength
            state.druidBeardLength.push(beard)
        }
        let uniqueBeardValues = [...new Set(state.druidBeardLength)].sort()
        console.log(uniqueBeardValues)
        state.druidBeardLength = uniqueBeardValues
    }
}