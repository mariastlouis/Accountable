import getLawmaker from './helper'
import { mockLawmakerObject, mockLawmakerApiResponse } from '../mockData/mockData.js';
import key from '../key.js'


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