class Name {
  makeCategorySlug(slug) {
    return `${slug}/1`;
  }

  makeHashTag(tagName, count = 0) {
    return count ? `#${tagName}(${count})` : `#${tagName}`;
  }

  makeTitle(titleName) {
    return titleName[0].toUpperCase() + titleName.slice(1);
  }
}

export default new Name();
