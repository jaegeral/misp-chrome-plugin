function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
    return;
  }

  window.localStorage.mispurl = ""
  window.localStorage.mispauthkey = ""
}
