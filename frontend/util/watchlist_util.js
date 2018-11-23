export const fetchList = (title) => {
  return $.ajax({
    method: "get",
    url: `api/watchlists/${title}`,
    error: (err) => console.log(err)
  });
};

export const fetchLists = user_id => {
  return $.ajax({
    method: "get",
    url: `api/users/${user_id}/watchlists`,
    error: (err) => console.log(err)
  });
};


export const addStockToList = (watchlist_id, stock) => {

  return $.ajax({
    method: "post",
    url: `api/watchlists/${watchlist_id}/watch_list_stock_joins`,
    data: stock
  });

};
export const removeStockFromList = (watchlist_id, stock) => {

  return $.ajax({
    method: "delete",
    url: `api/watchlists/${watchlist_id}/watch_list_stock_joins`,
    data: stock
  });

};
