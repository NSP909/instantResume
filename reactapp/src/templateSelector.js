import template from "./templates/Template";
import template2 from "./templates/Template2";
import template3 from "./templates/Template3";
import template4 from "./templates/Template4";
import template5 from "./templates/Template5";

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