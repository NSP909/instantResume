import template from "./Template";
import template2 from "./Template2";
import template3 from "./Template3";
import template4 from "./Template4";
import template5 from "./Template5";

function selectTemplate(selectedTemplate) {
  switch (selectedTemplate) {
    case 0:
      return template;
    case 1:
      return template2;
    case 2:
      return template3;
    case 3:
      return template4;
    case 4:
      return template5;
    default:
      return template; // You can adjust the default as needed
  }
}

export default selectTemplate;