
export const searchValue = (search) => ({
    type: "RESULT_SEARCH_VALUE",
    search
});

export const colorValue = (color) => ({
    type: "GET_COLOR_VALUE",
    color
});


export const categoryValue = (category) => ({
    type: "GET_CATEGORY_VALUE",
    category
});

export const sizeValue = (size) => ({
    type: "GET_SIZE_VALUE",
    size
});

export const sortValue = (sort_by) => ({
    type: "GET_SORT_BY_VALUE",
    sort_by
});

export const ratingValue = (rating) => ({
    type: "GET_RATING_VALUE",
    rating
});

export const priceValue = (value) => ({
    type: "GET_PRICE_VALUE",
    value
});
