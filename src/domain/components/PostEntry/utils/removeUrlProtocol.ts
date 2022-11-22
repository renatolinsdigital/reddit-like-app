function removeUrlProtocol(url: string) {
  return url.substring(url.indexOf(":") + 3);
}

export default removeUrlProtocol;

