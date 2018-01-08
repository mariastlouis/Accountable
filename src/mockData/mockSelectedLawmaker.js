/* eslint-disable */

export const mockSelectedLawmaker = {
  id: 'COL000033',
  contact: {
    firstName: "Lucia",
    lastName: "Guzman",
    party: "Democrat",
    image: "http://leg.colorado.gov/sites/default/files/styles/width_300/public/2017b_rsz_guzman-co-17.jpg?itok=kF6sK0P4",
    website: "http://leg.colorado.gov/legislators/lucia-guzman",
    phone: "303 866 4862",
    active: true,
    occupation: "Senator, District 34",
    chamber: "Senate",
    district: 34
  },
  committees: [
    {
      name: "none",
      position: "none",
      committeeId: "none",
      chamber: "upper",
      term: "2017-2018",
      website: "none"
    },

    {
      name: "Executive Committee of the Legislative Council",
      position: "member",
      committeeId: "COC000219",
      chamber: "upper",
      term: "2017-2018",
      website: "http://leg.colorado.gov/committees/executive-committee-legislative-council/2017-regular-session"
    }
  ],
            
  bills: [
    {
      billTitle: "Taxation Of Retail Marijuana Sales",
      billId: "COB00005158",
      billTitleId: "SB 17B-001",
      session: "2017B",
      signed: {
        signAction: "Senate Committee on Transportation Postpone Indefinitely",
        signDate: "2017-10-02 06:00:00"
      }
    },
    {
      billTitle: "Domestic Violence Fatality Review Board",
      billId: "COB00004620",
      billTitleId: "SB 17-126",
      session: "2017A",
      signed: {
        signAction: "Governor Signed",
        signDate: "2017-06-08 06:00:00"
      }
    }
  ]
  
};

export const mockSignedBill = [{
  billTitle: "Domestic Violence Fatality Review Board",
  billId: "COB00005158",
  billTitleId: "SB 17B-001",
  session: "2017B",
  signed: {
    signAction: "Governor Signed",
    signDate: "2017-10-02 06:00:00"
  }
}];

export const mockUnsignedBill = [{
  billTitle: "Taxation Of Retail Marijuana Sales",
  billId: "COB00005158",
  billTitleId: "SB 17B-001",
  session: "2017B",
  signed: {
    signAction: "Senate Committee on Transportation Postpone Indefinitely",
    signDate: "2017-10-02 06:00:00"
  }
}];
