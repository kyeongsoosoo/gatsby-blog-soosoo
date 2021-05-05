class Name {
  makeCategorySlug(slug) {
    return `${slug}/1`;
  }

  makeHashTag(tagName, count = 0) {
    return count ? `#${tagName}(${count})` : `#${tagName}`;
  }
}

export default new Name();
