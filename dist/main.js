(() => { "use strict"; let t = document.querySelector("#myButton"), e = document.querySelector("#myPara"); t.onclick = function () { n = !n, o() }; let n = !1; function o() { t.textContent = n ? "Hide Description" : "Show Description", e.style.display = n ? "block" : "none " } o() })();