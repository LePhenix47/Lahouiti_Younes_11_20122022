//Function to change the title of the page
export function changeMetadataTitle(title) {
  const openGraphTitleOfThePage = document.querySelector(
    `meta[property="og:title"]`
  );
  document.title = title;
  openGraphTitleOfThePage?.setAttribute("content", title);
}

//Function to change the description of the page
export function changeMetadataDescription(description) {
  const descriptionOfThePage = document.querySelector(
    `meta[name="description"]`
  );

  const openGraphTitleOfThePage = document.querySelector(
    `meta[property="og:description"]`
  );

  openGraphTitleOfThePage?.setAttribute("content", description);
  descriptionOfThePage?.setAttribute("content", description);
}

//Function to index the page or not
export function changeMetadataIndexation(boolToIndexPage) {
  const robotMetadata = document.querySelector(`meta[name="robots"]`);
  if (typeof boolToIndexPage !== "boolean") {
    return "";
  }

  robotMetadata.setAttribute("content", boolToIndexPage);
}
