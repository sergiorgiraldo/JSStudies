import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { onDatePickerPage } from "../support/page_objects/datepickerPage";
import { onSmartTablePage } from "../support/page_objects/smartTablePage";

describe("Test with Page Objects", () => {

    beforeEach("open application", () => {
        cy.openHomePage();
    })

    it("verify navigations across the pages", () => {
        navigateTo.formLayoutsPage();
        navigateTo.datepickerPage();
        navigateTo.smartTablePage();
        navigateTo.tooltipPage();
        navigateTo.toasterPage();
    })

    it.only(" should submit Inline and Basic form and select tomorrow date in the calendar", {browser: ["!firefox", "!edge"]}, () => {
        navigateTo.formLayoutsPage();
        onFormLayoutsPage.submitInlineFormWithNameAndEmail("Sergio", "test@test.com");
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword("test@test.com", "password");
        navigateTo.datepickerPage();
        onDatePickerPage.selectCommonDatepickerDateFromToday(1);
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);
        navigateTo.smartTablePage();
        onSmartTablePage.addNewRecordWithFirstAndLastName("Sergio", "RG");
        onSmartTablePage.updateAgeByFirstName("Sergio", "50");
        onSmartTablePage.deleteRowByIndex(1);
    })

});