
export const makeLawmakerArray = lawmakers => ({
  type: 'MAKE_LAWMAKER_ARRAY',
  lawmakers
});

export const setSelectLawmaker = (lawmaker) => ({
  type: 'SELECT_LAWMAKER',
  lawmaker
});

export const setClickedLawmaker = (lawmaker) => ({
  type: 'CLICK_LAWMAKER',
  lawmaker
});

export const setBillArray = (bills) => ({
  type: 'MAKE_BILL_ARRAY',
  bills
});

export const setClickedBill = (bill) => ({
  type: 'CLICK_BILL',
  bill
});
