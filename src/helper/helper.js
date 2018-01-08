import key from '../key.js';

export const getLawmaker = async() => {
  /*eslint-disable */
  const lawmakerFetch = await fetch(`https://openstates.org/api/v1/legislators/?state=co&apikey=${key}`);
  /*eslint-enable */
  const lawmakerObject = await lawmakerFetch.json();
  return cleanLawmaker(lawmakerObject);
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

    return Promise.all(unresolvedPromises);
  } catch (type) {
    return Error('fetch failed');
  }
};


export const selectNewLawmaker = async(id) => {
  const selectFetch = await fetch(`https://openstates.org/api/v1/legislators/${id}/?apikey=${key}`);
  const selectObject = await selectFetch.json();
  return cleanLawmakerSelect(selectObject);
};


export const cleanLawmakerSelect = (async(lawmakers) => {
  try {
    const committees = lawmakers.roles;
    const committeePromises = await getCommittees(committees);
    const chamberPromises = await getChamber(lawmakers.chamber);
    const partyPromises = await getParty(lawmakers.party);
    const billPromises = await getBills(lawmakers.id);
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
      committees: committeePromises,
      bills: billPromises
        
    };
  } catch (type) {
    return Error('Fetch failed');
  }

});

const getCommittees = (committees) => { 
  
  const unresolvedPromises = Object.keys(committees).map(async(committee) =>{
    const committeeId = committees[committee].committee_id;
    const committeePromises = await getWebsite(committeeId);

  
    return {
      name: committees[committee].committee || 'none',
      position: committees[committee].position || 'none',
      committeeId: committees[committee].committee_id || 'none',
      chamber: committees[committee].chamber || 'none',
      term: committees[committee].term || 'none',
      website: committeePromises || 'none'
    };
 
  });
  return Promise.all(unresolvedPromises);
};


export const getChamber = (chamber) => {
  return chamber === 'upper' ? 'Senate' : 'House';
};

export const getParty = (party) => {
  return party === 'Democratic' ? 'Democrat' : party;
};

const getWebsite = async(committeeId) => {
  if (committeeId){
    /*eslint-disable */
    const committeeFetch = await fetch(`https://openstates.org/api/v1/committees/${committeeId}/?apikey=${key}`);
    /*eslint-enable */
    const committeeObject = await committeeFetch.json();
    return committeeObject.sources[0].url;
  }

};

const getBills = async(lawmakerId) =>{
  /*eslint-disable */
  const billFetch = await fetch(`https:openstates.org/api/v1/bills/?sponsor_id=${lawmakerId}&page=1&per_page=25&apikey=${key}`);
  /*eslint-enable */
  const billObject = await billFetch.json();
  return cleanBills(billObject);
};


const cleanBills = (bills) => {
  const unresolvedPromises = Object.keys(bills).map(async(bill) => {
    const billPromises = await getBillDetail(bills[bill].id);
    
    return {
      billTitle: bills[bill].title,
      billId: bills[bill].id,
      billTitleId: bills[bill].bill_id,
      session: bills[bill].session,
      signed: billPromises
    };

  });
  return Promise.all(unresolvedPromises);
};

const getBillDetail = async(billId) => {
  const billFetch = await fetch(`https:openstates.org/api/v1/bills/${billId}/?apikey=${key}`);
  const billObject = await billFetch.json();
  return {
    signAction: billObject.actions[0].action,
    signDate: billObject.actions[0].date
  }; 
};




export const setCoordinates = async(latitude, longitude) => {
  /*eslint-disable */
  const lawmakerFetch = await fetch(`https:openstates.org/api/v1/legislators/geo/?lat=${latitude}&long=${longitude}&apikey=${key}`);
  /*eslint-enable */
  const lawmakerObject = await lawmakerFetch.json();
  return lawmakerObject;
};



  