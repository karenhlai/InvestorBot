export const RECEIVE_PORTFOLIOS = 'RECEIVE_PORTFOLIOS';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';


export const receivePortfolios = (portfolios) => ({
  type: RECEIVE_PORTFOLIOS, 
  portfolios
});

export const receivePortfolio = (portfolio) => ({
  type: RECEIVE_PORTFOLIO, 
  portfolio
});

