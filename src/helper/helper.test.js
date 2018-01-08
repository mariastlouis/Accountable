import { getLawmaker, selectNewLawmaker, setCoordinates } from './helper';
/*eslint-disable */
import { mockLawmakerApiResponse, mockDetailApiCall, mockLatLongApiCall} from '../mockData/mockApiCallData.js';
/*eslint-enable */
import key from '../key.js';


describe('getLawmaker', () =>{
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockLawmakerApiResponse)
    })
  );

  it('should be a function', () =>{
    expect(getLawmaker).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await getLawmaker();
    expect(typeof fetch).toEqual('object');
  });

  it('getlawmaker is called with the correct params', async () => {
    const expected = [
      `https://openstates.org/api/v1/legislators/?state=co&apikey=${key}`
    ];
    await getLawmaker();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

});

describe('selectNewLawmaker', () =>{ 
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockDetailApiCall)
    })
  );

  it('should be a function', () =>{
    expect(selectNewLawmaker).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await selectNewLawmaker();
    expect(typeof fetch).toEqual('object');
  });

});

describe('setCoordinates', () =>{ 
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockLatLongApiCall)
    })
  );

  it('should be a function', () =>{
    expect(setCoordinates).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await setCoordinates();
    expect(typeof fetch).toEqual('object');
  });

});