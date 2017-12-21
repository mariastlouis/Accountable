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

// export default getLawmaker ;

  