export const FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';


export const receivePortfolios = (portfolios) => ({
  type: FETCH_PORTFOLIOS, 
  payload: { portfolios }
});

export const receivePortfolio = (portfolio) => ({
  type: FETCH_PORTFOLIO, 
  portfolio
});

