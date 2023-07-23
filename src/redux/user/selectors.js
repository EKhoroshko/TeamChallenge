export const getUser = store => store.user;

export const getLoginUser = store => store.user.isLogin;

export const getLoadingUser = store => store.user.isLoading;

export const getUserToken = store => store.user.token;

export const getUserSubscribe = store => store.user.subscription;

export const getUserFavoriteList = store => store.user.favorite;
