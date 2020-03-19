            //console.log('Tekst 1');
            //window.alert('Tekst 2');
            //document.write('Tekst 3');
            var x = window.prompt();
            document.write(typeof(x));
            document.write(x);
            //Dla liczby typ to string
            //Dla napisu typ to string
            //Dla braku wartości typ to string (pusty)
            //Dla anulowania akcji typ to objectnull
            function printForm() {
                var selectForm = document.forms.fm;
                var selectTextInput = selectForm.elements.pole_tekstowe;
                document.write(selectTextInput.value);
                document.write(typeof(selectTextInput.value));
                //Dla napisu typ to string
                //Dla liczby typ to string
                //Dla braku wartości typ to string (pusty)
            }