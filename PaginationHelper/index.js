function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  
    let count = 0;
    this.collection.forEach(() => {
        count++;
    });;
    return count;
  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  
    let pages = 0;
    for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
        pages++;
    }
    return pages;

}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {

    const pages = this.pageCount();
    const items = this.itemCount();

    if (pageIndex > pages - 1 || pageIndex < 0) return -1;
    else if (pageIndex === pages - 1) return items - (pages - 1) * this.itemsPerPage;
    else return this.itemsPerPage;


}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    let pageIndex = -1;
    for (let i = 0; i <= itemIndex; i += this.itemsPerPage) {
        pageIndex++;
    }
    return pageIndex;
  
}