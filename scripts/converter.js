const questions = document.querySelectorAll('.wpProQuiz_listItem');

const quizzResults = [...questions].map(question => {
    const title = question.querySelector('p').innerText;
    const id = question.querySelector('.wpProQuiz_questionList').getAttribute('data-question_id');
    const json = {"3915":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"fbf1734c29","p_nonce":"9f0d2d052f"},"3916":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"8f4acc3c9a","p_nonce":"a33833b36b"},"3917":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"4f3d277b71","p_nonce":"bc4693c15d"},"3918":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"53610b7086","p_nonce":"cf37378e29"},"3919":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"adf97803c5","p_nonce":"02de487c43"},"3920":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"18060a2055","p_nonce":"b6a59808c4"},"3921":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"4e6fad4fb8","p_nonce":"9aee641324"},"3922":{"c":true,"p":5,"s":{},"e":{"type":"multiple","r":[false,true,false,true,true,false],"possiblePoints":5},"a_nonce":"8ef5cb7de9","p_nonce":"5712a2cbf4"},"3924":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,false,true,false,false,true],"possiblePoints":5},"a_nonce":"b2ca399598","p_nonce":"482bc162f3"},"3925":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"cd6870c68e","p_nonce":"3c0ae126f9"},"3926":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,true,false,true],"possiblePoints":5},"a_nonce":"9fc4f702b2","p_nonce":"6213f02664"},"3927":{"c":true,"p":5,"s":{},"e":{"type":"multiple","r":[false,false,true,true],"possiblePoints":5},"a_nonce":"24286ed5ef","p_nonce":"1bb8b3f737"},"3928":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"7cb58e4348","p_nonce":"9d061c5daa"},"3930":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"4251b63021","p_nonce":"30459e2bca"},"3931":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"99805c240d","p_nonce":"1e82cf7269"},"3932":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"b5fb9cf399","p_nonce":"1e7889f429"},"3933":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"bb2483ff7f","p_nonce":"4d8623fd9c"},"3934":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"49c83bc09c","p_nonce":"be305c97dd"},"3935":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"e5f8e16ad9","p_nonce":"f3b649a832"},"3936":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"9f289f5771","p_nonce":"d76aaea17d"},"3937":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"6913600c45","p_nonce":"ff82c35151"},"3938":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"dc82a43e51","p_nonce":"272b40a255"},"3939":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,true,false,false],"possiblePoints":10},"a_nonce":"35d6a2d588","p_nonce":"58bae351fd"},"3940":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"1eaa1791a6","p_nonce":"21c6a0dd3e"},"3941":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"edb5ac5eb0","p_nonce":"5d730303a4"},"3942":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"6a2120188c","p_nonce":"c0654a5234"},"3943":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"7d56839546","p_nonce":"4b2693c017"},"3944":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"1900f04d4d","p_nonce":"cfae0bc0c0"},"3945":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"b77f51abec","p_nonce":"75a2b42266"},"3946":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,true,false],"possiblePoints":10},"a_nonce":"dfa7a1d9a7","p_nonce":"315d899e38"},"3947":{"c":true,"p":10,"s":{},"e":{"type":"multiple","r":[false,true,false,true],"possiblePoints":10},"a_nonce":"150e5d891b","p_nonce":"bf04465dc9"},"3948":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"12bddf6dc6","p_nonce":"7527e94550"},"3949":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"eebdcb8995","p_nonce":"91428a9581"},"3950":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"255bcb1faf","p_nonce":"76a3a7851a"},"3951":{"c":true,"p":10,"s":{},"e":{"type":"multiple","r":[true,false,false,true,false],"possiblePoints":10},"a_nonce":"19b4cdca0f","p_nonce":"5eeefb37a3"},"3952":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"91cecc3be6","p_nonce":"c828508639"},"3953":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,true,false],"possiblePoints":10},"a_nonce":"31057a80cb","p_nonce":"ea87315c21"},"3954":{"c":true,"p":10,"s":{},"e":{"type":"multiple","r":[true,false,false,true,false,true],"possiblePoints":10},"a_nonce":"d9d5177518","p_nonce":"94213444d2"},"3955":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"2216fd656e","p_nonce":"5ce0271cc9"},"3956":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"7dd6eef5eb","p_nonce":"06d8125922"},"3957":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"0cb41a83d2","p_nonce":"72178248eb"},"3958":{"c":false,"p":0,"s":{},"e":{"type":"multiple","r":[false,true,false,false,true,false],"possiblePoints":10},"a_nonce":"a4f9ef9ed0","p_nonce":"b5251c0c44"},"3959":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"d19d400025","p_nonce":"40b6d5c39b"},"3960":{"c":true,"p":10,"s":{},"e":{"type":"single","r":[true,false,false],"possiblePoints":10},"a_nonce":"f58302a418","p_nonce":"4390b5e41d"},"3961":{"c":true,"p":10,"s":{},"e":{"type":"single","r":[false,false,true],"possiblePoints":10},"a_nonce":"75187d3f1f","p_nonce":"948bf4ffc1"},"3962":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"94ab47d2a5","p_nonce":"48c5bdc48f"},"3963":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"14d93994cc","p_nonce":"b4b64db262"},"3964":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"cd20bbe901","p_nonce":"24c3c0d8db"},"3965":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"042db0f00b","p_nonce":"cc696ab204"},"3966":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,true],"possiblePoints":10},"a_nonce":"36001c8aeb","p_nonce":"121bd9d36b"},"3967":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"0cfce9d59c","p_nonce":"552a4c82b3"},"3968":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"4b0691e3f8","p_nonce":"a9dbec9e07"},"3969":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"35eb8a7032","p_nonce":"1d9b208599"},"3970":{"c":true,"p":5,"s":{},"e":{"type":"single","r":[false,false,true,false],"possiblePoints":5},"a_nonce":"1a7c8b9bc4","p_nonce":"5023869525"},"3971":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"025aa3a299","p_nonce":"4fece85fb9"},"3972":{"c":true,"p":5,"s":{},"e":{"type":"single","r":[false,false,true,false,false],"possiblePoints":5},"a_nonce":"658d01d10f","p_nonce":"7113587046"},"3973":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"f6a8c5d197","p_nonce":"9a25c37428"},"3974":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false,false],"possiblePoints":5},"a_nonce":"3e00eefc01","p_nonce":"9558297ec0"},"3975":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"eb08290d3c","p_nonce":"c61a7527d3"},"3976":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"5f67efd6f1","p_nonce":"586eef46e5"},"3977":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"4c23ee9cee","p_nonce":"113c8692a6"},"3978":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"c654dec304","p_nonce":"c4475b29d9"},"3979":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"e37467cf7e","p_nonce":"7af4d647e9"},"3980":{"c":true,"p":5,"s":{},"e":{"type":"single","r":[false,false,true,false,false,false],"possiblePoints":5},"a_nonce":"6e72e7d7f0","p_nonce":"9bf149a776"},"3981":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"50b11205f7","p_nonce":"3f40971c58"},"3982":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false,false],"possiblePoints":5},"a_nonce":"454a8434e6","p_nonce":"49e87beadc"},"3983":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false,false],"possiblePoints":5},"a_nonce":"a76f15daf2","p_nonce":"ce2efc00a9"},"3984":{"c":true,"p":5,"s":{},"e":{"type":"single","r":[false,false,true,false,false,false],"possiblePoints":5},"a_nonce":"5956601ef2","p_nonce":"98b177b25c"},"3985":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false,false],"possiblePoints":5},"a_nonce":"b1fcfcca76","p_nonce":"512c4bf10f"},"3986":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"3e94290af8","p_nonce":"868068c729"},"3987":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"e8f9dccb8d","p_nonce":"9bf2b8207e"},"3988":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"e0fd457c3f","p_nonce":"f3eb18eecd"},"3989":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"d80f86885f","p_nonce":"6f93b6b4c4"},"3990":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"6ea39733d5","p_nonce":"1f8ee47f69"},"3992":{"c":true,"p":5,"s":{},"e":{"type":"single","r":[true,false,false],"possiblePoints":5},"a_nonce":"03db15971f","p_nonce":"80e9b1b282"},"3993":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"fa53970b55","p_nonce":"a32607d385"},"3994":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"11eab7c1ab","p_nonce":"bbc0317ab4"},"3995":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"ddaeb3da35","p_nonce":"1eae103b9d"},"3996":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"9d0de5669f","p_nonce":"219d90a2b5"},"3997":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"2db6c509a9","p_nonce":"41e8acf605"},"3998":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"6b2c8fa0c0","p_nonce":"2754d9c7f4"},"3999":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"3171542d1e","p_nonce":"160d30ddac"},"4000":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"0096874667","p_nonce":"a0387a2b8a"},"4001":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"a0a48e02a6","p_nonce":"a3bb87d7bf"},"4002":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"6c1bf95502","p_nonce":"96aafff243"},"4003":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"80c5f81f43","p_nonce":"227e55ca95"},"4004":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"73f98aaf6b","p_nonce":"d8e2709098"},"4005":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"82e74886c7","p_nonce":"1e9aa60305"},"4006":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[true,false,false],"possiblePoints":10},"a_nonce":"38b2c43961","p_nonce":"847c81f58b"},"4008":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"4a81ec61aa","p_nonce":"f836e589e7"},"4009":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"3c94f34538","p_nonce":"d4c8fd7208"},"4010":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"fe86b9a76f","p_nonce":"7896f4d23e"},"4011":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"e86a7dc0ec","p_nonce":"0722811cf7"},"4012":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"7da41a1e4f","p_nonce":"484c02be72"},"4013":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"31b46a50b2","p_nonce":"2ca16fc484"},"4014":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"fdc0c05235","p_nonce":"e8965a30ec"},"4015":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"af66dea418","p_nonce":"85e20f1e3a"},"4016":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"730e8c3d0d","p_nonce":"ee18f9a8aa"},"4017":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"2ecb310215","p_nonce":"7fb7cda136"},"4018":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"d3172b96e8","p_nonce":"a42bed3e06"},"4019":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"2bf7deff53","p_nonce":"d0bac12873"},"4020":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"60997d8ab7","p_nonce":"52e079c22f"},"4021":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"32d1c4f2cb","p_nonce":"6a14a306c8"},"4022":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"64ec577a72","p_nonce":"1b332811c8"},"4023":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"acb7f9c0d2","p_nonce":"bcb44b5d68"},"4024":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":5},"a_nonce":"32d0f61c9b","p_nonce":"4dd5061bcf"},"4025":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"151b302788","p_nonce":"4b203737e9"},"4026":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"9251d33929","p_nonce":"9c91732740"},"4027":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"2eb12adaff","p_nonce":"09b796b15d"},"4028":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"4076cc670b","p_nonce":"9a7e828a6c"},"4029":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"4f75eaa8db","p_nonce":"1149759243"},"4030":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false,false],"possiblePoints":10},"a_nonce":"d7623a9381","p_nonce":"72aaa449ba"},"4031":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"082ba2579e","p_nonce":"a21852a447"},"4032":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"3debdf087b","p_nonce":"401660db2d"},"4033":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"bd24dbedf6","p_nonce":"6a417cd6a4"},"4034":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":5},"a_nonce":"4f87baab7f","p_nonce":"484f861ba1"},"4035":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"d0d5ffd052","p_nonce":"4193397149"},"4036":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"f922cbec71","p_nonce":"3780a3dfde"},"4037":{"c":true,"p":10,"s":{},"e":{"type":"single","r":[false,false,true,false,false],"possiblePoints":10},"a_nonce":"7c2ee0d6c5","p_nonce":"29c5ff03ec"},"4038":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":10},"a_nonce":"f024845395","p_nonce":"e306deea67"},"4039":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false,false],"possiblePoints":10},"a_nonce":"8abe88fec8","p_nonce":"50bfe82aad"},"4040":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false],"possiblePoints":10},"a_nonce":"8edc0595df","p_nonce":"d1992be99f"},"4041":{"c":true,"p":5,"s":{},"e":{"type":"multiple","r":[true,false,true,false,false],"possiblePoints":5},"a_nonce":"89902894c8","p_nonce":"fea6345042"},"4049":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,true],"possiblePoints":10},"a_nonce":"2bb5f41cef","p_nonce":"c7dabdb905"},"4051":{"c":false,"p":0,"s":{},"e":{"type":"single","r":[false,false,false,false],"possiblePoints":5},"a_nonce":"9380a26b5d","p_nonce":"8711f9f9dc"}};
    const responses = [...question.querySelectorAll('label')].map((label) => {
            return json[id].e.r[label.parentNode.getAttribute('data-pos')] && label.innerText
    }).filter(Boolean);

    return {id, title, responses};

});

console.log(quizzResults);
console.log(JSON.stringify(quizzResults));