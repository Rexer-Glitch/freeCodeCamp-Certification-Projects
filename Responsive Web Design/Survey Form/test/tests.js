const { assert } = chai;
const form = document.getElementById("survey-form");

describe("Testing", function () {
  describe("You should have an h1 element with an id of title", function () {
    const element = document.getElementById("title");
    it("Presence of an h1 element with an id of title", function () {
      assert.equal(element !== null && element.tagName === "H1", true);
    });
    it("The #title should not be empty", function () {
      assert.equal(element !== null && element.textContent !== "", true);
    });
  });

  describe("You should have a p element with an id of description", function () {
    const element = document.getElementById("description");
    it("Presence of a p element with an id of description", function () {
      assert.equal(element !== null && element.tagName === "P", true);
    });
    it("The #description should not be empty", function () {
      assert.equal(element !== null && element.textContent !== "", true);
    });
  });

  describe("You should have a form element with an id of survey-form", function () {
    it("Presence of a form element with an id of survey-form", function () {
      const element = document.getElementById("survey-form");
      assert.equal(element !== null, true);
    });
  });

  describe("You should have an input element with an id of name", function () {
    const element = document.getElementById("name");
    const label = document.getElementById("name-label");
    it("Presence of an input element with an id of name", function () {
      assert.equal(element !== null && element.tagName === "INPUT", true);
    });
    it("The #name should have a type of text", function () {
      assert.equal(
        element !== null && element.getAttribute("type") === "text",
        true
      );
    });
    it("The #name should require input.", function () {
      assert.equal(
        element !== null && element.getAttribute("required") === "true",
        true
      );
    });
    it("The #name should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          element !== null &&
          form.contains(element),
        true
      );
    });

    it("You should have a label element with an id of name-label", function () {
      assert.equal(label !== null && label.tagName === "LABEL", true);
    });

    it("Your #name-label should contain text that describes the input", function () {
      assert.equal(
        label.textContent !== "" && label.getAttribute("for") === "name",
        true
      );
    });

    it("The #name should have a placeholder attribute and value", function () {
      assert.equal(
        element !== null &&
          element.getAttribute("placeholder") !== "" &&
          element.getAttribute("placeholder") &&
          element.value !== "",
        true
      );
    });

    it("The #name-label should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          label !== null &&
          form.contains(label),
        true
      );
    });
  });

  describe("You should have an input element with an id of email", function () {
    const element = document.getElementById("email");
    const label = document.getElementById("email-label");
    it("Presence of an input element with an id of email", function () {
      assert.equal(element !== null && element.tagName === "INPUT", true);
    });
    it("The #email should have a type of text", function () {
      assert.equal(
        element !== null && element.getAttribute("type") === "email",
        true
      );
    });
    it("The #email should require input.", function () {
      assert.equal(
        element !== null && element.getAttribute("required") === "true",
        true
      );
    });
    it("The #email should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          element !== null &&
          form.contains(element),
        true
      );
    });

    it("You should have a label element with an id of email-label", function () {
      assert.equal(label !== null && label.tagName === "LABEL", true);
    });

    it("The #email-label should contain text that describes the input", function () {
      assert.equal(
        label.textContent !== "" && label.getAttribute("for") === "email",
        true
      );
    });

    it("The #email should have a placeholder attribute and value", function () {
      assert.equal(
        element !== null &&
          element.getAttribute("placeholder") !== "" &&
          element.getAttribute("placeholder") &&
          element.value !== "",
        true
      );
    });

    it("The #email-label should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          label !== null &&
          form.contains(label),
        true
      );
    });
  });
  describe("You should have an input element with an id of number", function () {
    const element = document.getElementById("number");
    const isNumeric = (attr) =>
      !isNaN(parseFloat(element.getAttribute(attr))) &&
      isFinite(element.getAttribute(attr));
    const label = document.getElementById("number-label");
    it("Presence of an input element with an id of number", function () {
      assert.equal(element !== null && element.tagName === "INPUT", true);
    });
    it("The #number should have a type of number", function () {
      assert.equal(
        element !== null && element.getAttribute("type") === "number",
        true
      );
    });
    it("The #number should have a min attribute with a numeric value", function () {
      assert.equal(element !== null && isNumeric("min"), true);
    });

    it("The #number should have a max attribute with a numeric value", function () {
      assert.equal(element !== null && isNumeric("max"), true);
    });

    it("The #number should have a placeholder attribute and value", function () {
      assert.equal(
        element !== null &&
          element.getAttribute("placeholder") !== "" &&
          element.getAttribute("placeholder") &&
          element.value !== "",
        true
      );
    });

    it("The #number should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          element !== null &&
          form.contains(element),
        true
      );
    });

    it("You should have a label element with an id of number-label", function () {
      assert.equal(label !== null && label.tagName === "LABEL", true);
    });

    it("The #number-label should contain text that describes the input", function () {
      assert.equal(
        label.textContent !== "" && label.getAttribute("for") === "number",
        true
      );
    });

    it("The #number-label should be a descedant of #survey-form", function () {
      assert.equal(
        form !== null &&
          form.tagName === "FORM" &&
          label !== null &&
          form.contains(label),
        true
      );
    });
  });

  describe("You should have a select field with an id of dropdown", function(){
    const element = document.getElementById("dropdown");
    const atleastTwoUndisabledOpts = (el)=> {
      if(!el) return 0;
      let count = 0;

      const options = el.getElementsByTagName("option");
      
      if(!options) return 0;
    
      [...options].forEach(opt => {
        if(opt.getAttribute("disabled") !== "true"){
          count++;
        }
      })

      return count;
    }

    it("Presence of a select field with an id of dropdown", function(){
        assert.equal(element !== null && element.tagName === "SELECT" ,true)
    })

    it("The #dropdown should have at least two selectable (not disabled) option elements", function(){
      assert.isAbove(atleastTwoUndisabledOpts(element), 1);
    })

    it("The #dropdown should be a descendant of #survey-form", function(){
      assert.equal(form && element && form.contains(element),true);
    })
  });

  describe("You should have at least two radio buttons that are descendants of #survey-form", function(){
    const radios = [...form.querySelectorAll('input[type="radio"]')];
    it("Presence of at least two radio buttons that are descendants of #survey-form", function(){
        if(!form) assert.isNotNull(form);
        assert.isAbove(radios.length, 1);
    })

    it("All the radio buttons should have a name attribute and value", function(){
        let ok = true;
        for(let i = 0; i < radios.length; i++){
          const name = radios[i].getAttribute("name");
          if(!name || name && name === "" || radios[i].value === ""){
            ok = false;
            break;
          }
        }
      
        assert.isTrue(ok);
    })

    it("Every radio button group should have at least 2 radio buttons", function(){
        const radioGroups = {};
        radios.forEach(radio=>{
          const name = radio.getAttribute("name");
          if(name && radioGroups.hasOwnProperty(name)){
            radioGroups[name] += 1;
          }
          if(name && !radioGroups.hasOwnProperty(name)){
            radioGroups[name] = 1;
          }

        })

        const values = Object.values(radioGroups);
        let ok = true;

        values.forEach(value => {
          if(value < 2){
            ok = false;
          }
        })

        assert.isTrue(ok);
    })
  })

  describe("You should have at least two input elements with a type of checkbox (checkboxes) that are descendants of #survey-form", function(){
    const checkboxes = [...form.querySelectorAll('input[type="checkbox"')];

    it("Presence of at least two input elements with a type of checkbox (checkboxes) that are descendants of #survey-form", function(){
      assert.isAbove(checkboxes.length, 1);
    })

    it("All your checkboxes inside #survey-form should have a value attribute and value", function(){
      let ok = true;

      for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].value === ""){
          ok = false;
          break;
        }
      }

      assert.isTrue(ok);
    })
  })

  describe("You should have at least one textarea element that is a descendant of #survey-form", function(){
    it("Presence of at least one textarea element that is a descendant of #survey-form", function(){
      const textareas = [...document.querySelectorAll("form#survey-form textarea")];
      assert.isAbove(textareas.length, 0);
    })
  })

  describe("You should have an input or button element with an id of submit", function(){
    const submitBtn = document.querySelector("form#survey-form #submit");
    it("Presence of an input or button element with an id of submit", function(){
      if(!submitBtn || submitBtn.tagName !== "BUTTON" && submitBtn.tagName !== "INPUT")
      {
        assert.isTrue(false);
      }
      assert.isNotNull(submitBtn);
    })

    it("The #submit should have a type of submit", function(){
      assert.isTrue(submitBtn && submitBtn.getAttribute("type") === "submit");
    })

    it("The #submit should be a descendant of #survey-form", function(){
      assert.isNotNull(submitBtn);
    })
  })
});
