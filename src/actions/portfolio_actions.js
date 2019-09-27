export const FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const fetchPortfolios = (portfolios) => ({
  type: FETCH_PORTFOLIOS, 
  portfolios
});

export const fetchPortfolio = (portfolioId) => ({
  type: FETCH_PORTFOLIO, 
  portfolioId
});

export const increment = () => ({
  type: INCREMENT, 
})

export const decrement = () => ({
  type: DECREMENT, 
})
