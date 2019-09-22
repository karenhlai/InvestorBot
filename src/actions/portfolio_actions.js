export const FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';


export const fetchPortfolios = (portfolios) => ({
  type: FETCH_PORTFOLIOS, 
  portfolios
});

export const fetchPortfolio = (portfolio) => ({
  type: FETCH_PORTFOLIO, 
  portfolio
});

