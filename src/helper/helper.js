import key from '../key.js'

export const getLawmaker = async() => {
  const lawmakerFetch = await fetch(`https://openstates.org/api/v1/legislators/?state=co&apikey=${key}`);
  const lawmakerObject = await lawmakerFetch.json();
  return cleanLawmaker(lawmakerObject)
};

const cleanLawmaker = (lawmakers) => {
  try {
    // let lawmakerKeys = Object.keys(lawmakers);
    const unresolvedPromises =  Object.keys(lawmakers).map(async(lawmaker) => {
      return {
        id: lawmakers[lawmaker].id,
        isSelected: false,
        contact: {
          firstName: lawmakers[lawmaker].first_name,
          lastName: lawmakers[lawmaker].last_name,
          party: lawmakers[lawmaker].party,
          image: lawmakers[lawmaker].photo_url,
          website: lawmakers[lawmaker].url,
          phone: lawmakers[lawmaker]['+phone'],
          active: lawmakers[lawmaker].active,
          occupation: lawmakers[lawmaker]['+occupation'],
          chamber: lawmakers[lawmaker].chamber,
          district: lawmakers[lawmaker].district
        }
      };
    });

    return Promise.all(unresolvedPromises)
  } catch (type) {
    return Error('fetch failed');
  }
};


export const selectNewLawmaker = async(id) => {
  const selectFetch = await fetch(`https://openstates.org/api/v1/legislators/${id}/?apikey=${key}`);
  const selectObject = await selectFetch.json();
  // return cleanLawmakerSelect(selectObject)
    return cleanLawmakerSelect(selectObject)
  }


const cleanLawmakerSelect = (async(lawmakers) => {
  try {
      const committees = lawmakers.roles;
      const committeePromises = await getCommittees(committees);
      const chamberPromises = await getChamber(lawmakers.chamber);
      const partyPromises = await getParty(lawmakers.party);
    return {

        id: lawmakers.id,
        contact: {
          firstName: lawmakers.first_name,
          lastName: lawmakers.last_name,
          party: partyPromises,
          image: lawmakers.photo_url,
          website: lawmakers.url,
          phone: lawmakers['+phone'],
          active: lawmakers.active,
          occupation: lawmakers['+occupation'],
          chamber: chamberPromises,
          district: lawmakers.district
        },
        committees: committeePromises
        
      }
  } catch (type) {
    return Error ('Fetch failed')
  }

})

const getCommittees = (committees) => { 
  
  const unresolvedPromises = Object.keys(committees).map(async(committee) =>{
  const chamberPromises = getChamber(committees[committee].chamber)
  const committeeId = committees[committee].committee_id
  const committeePromises = await getWebsite(committeeId)

  
  return {
    name: committees[committee].committee || 'none',
    position: committees[committee].position || 'none',
    committeeId: committees[committee].committee_id || 'none',
    chamber: committees[committee].chamber || 'none',
    term: committees[committee].term || 'none',
    website: committeePromises || 'none'
  }
 
  })
  return Promise.all(unresolvedPromises)
}


const getChamber = (chamber) => {
  return chamber === 'upper' ? 'Senate' : 'House';
}

const getParty = (party) => {
    return party === 'Democratic' ? 'Democrat' : party
};

const getWebsite = async(committeeId) => {
  if(committeeId){
  const committeeFetch = await fetch(`https://openstates.org/api/v1/committees/${committeeId}/?apikey=${key}`);
  const committeeObject = await committeeFetch.json();
return committeeObject.sources[0].url
  }

};

export const setCoordinates = async(latitude, longitude) => {
  const lawmakerFetch = await fetch(`https:openstates.org/api/v1/legislators/geo/?lat=${latitude}&long=${longitude}&apikey=${key}`);
  const lawmakerObject = await lawmakerFetch.json();
  return cleanLawmakerCoordinates(lawmakerObject)
}

const cleanLawmakerCoordinates = (lawmakers) => {
  const unresolvedPromises = Object.keys(lawmakers).map(async(lawmaker)=>{
    return {
        id: lawmakers[lawmaker].id,
        contact: {
          firstName: lawmakers[lawmaker].first_name,
          lastName: lawmakers[lawmaker].last_name,
          party: lawmakers[lawmaker].party,
          image: lawmakers[lawmaker].photo_url,
          chamber: lawmakers[lawmaker].chamber,
          district: lawmakers[lawmaker].district
        }
    }
  }) 
  return Promise.all(unresolvedPromises)
}


  