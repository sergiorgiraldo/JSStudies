// / <reference types="cypress" />

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // by Tag Name
        cy.get('input');

        // by ID
        cy.get('#inputEmail1');

        // by Class name
        cy.get('.input-full-width');

        // by Attribute name
        cy.get('[placeholder]');

        // by Attribute name and value
        cy.get('[placeholder="Email"]');

        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]');

        // by two different attributes
        cy.get('[placeholder="Email"][type="email"]');

        // by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

        // The most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]');
    })

    it('second test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="signInButton"]');

        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in');

        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in').parents('form').find('nb-checkbox').click();

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
    })

    it('then and wrap methods', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //inside cypress commands i use should to make asserts
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
            //inside jquery commands i use expect to make asserts
            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]');
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(emailLabelFirst).to.not.equal(emailLabelSecond);
                expect(passwordLabelFirst).to.equal(passwordLabelSecond);

                //wrap change the context to the element passed as an argument
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');

            })
        })
    })

    it('invoke command', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //1
        cy.get('[for="exampleInputEmail1"]')
            .should('contain', 'Email address')
            .should('have.class', 'label')
            .and('have.text', 'Email address');

        //2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address');
            expect(label).to.have.class('label');
            expect(label).to.have.text('Email address');
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address');
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            }
        );

        //SINCE THE CHECKBOX IS CHECKED BY THE PREVIOUS TEST, THE FOLLOWING TEST WONT WORK

        // cy.contains('nb-card', 'Basic form')
        //     .find('nb-checkbox')
        //     .click()
        //     .find('.custom-checkbox')
        //     .invoke('attr', 'class')
        //     .should('contain', 'checked');
    })

    it('assert property', () => {
        function selectDayFromCurrent(day){
            let date = new Date();
            date.setDate(date.getDate() + day);
            let futureDay = date.getDate();
            let futureMonth = date.toLocaleString('default', {month: 'short'});
            let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear();
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if(!dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click();
                    selectDayFromCurrent(day);
                } 
                else{
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click();
                }
            })
            return dateAssert;
        }

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click(); //the input is a jquery element, not the actual element. Wrap makes the element as the context, then i can click
            let dateAssert = selectDayFromCurrent(2);
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert); //prop is the object name for the properties
            cy.wrap(input).should('have.value', dateAssert);
        })
    })

    it.only('radio button', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked');

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true});
                
            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked');
                
            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled') ;
        });
    })

    it('check boxes', () => {
        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();

        //cy.get('[type="checkbox"]').check({force:true})
        cy.get('[type="checkbox"]').eq(0).click({force:true});
        cy.get('[type="checkbox"]').eq(1).check({force:true});

    })
})
