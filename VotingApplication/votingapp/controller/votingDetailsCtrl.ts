module votingModule {
    "use strict";

    export interface IDetailController {
        cancel(): void;
        getvoteId(voteId): void;

    }

    export class DetailController implements IDetailController {
        public static id: string = votingModule.AngularGlobals.votingModule + ".DetailController";
        stateService: services.IVotingModuleStateService;
        voteid: any
        party: models.IVotingData;
        $scope: any;
        status: any;
        userForm: any;
        // voterQuestions Add Remove Edit
        addQuestion: any;
        edit: any;
        save: any;
        removeRow;
        deletechoice: any;
        // Voters Add Remove
        voter: any;
        addvoter: any;
        deletevoter: any;
        removevoter: any;
        savevoter: any;
        options: any;
        Id: any;
        myForm: any;
        //Question Type
        Type: string;
        questype: any[];
        //Question Answers 
        questionAnswers: any[];
        quesans: any[]
        removeans: any;
        addanswer: any;
        saveans: any;
        editans: any;
        updateans: any;
        updateques: any;
        //and Tab
        tab: any;
        answerof: any[];

        static $inject = ["voteId", "votingModule.services.VotingModuleService",
            "votingModule.services.VotingModuleStateService", "ngDialog", "$scope", "$timeout", app.core.AngularGlobals.appCoreConstants];

        constructor(
            voteid: string,
            private service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService,
            private ngDialog: angular.dialog.IDialogService,
            $scope: ng.IScope, $timeout: ng.ITimeoutService,
            constants: app.core.IConstants
        ) {
            this.stateService = stateService;
            this.$scope = $scope;
            var vm = this;
            var baseUrl = constants.baseUrl;
            this.voteid = voteid;
            this.getvoteId(voteid);
            //Date Format

            this.$scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                this.$scope.opened = true;
            };

            this.$scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            this.$scope.format = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

           

            //Add Voter & Voter choice
            this.$scope.submitForm = function () {
                if (this.$scope.userForm.$valid) { }
            };

            //Voter Add method 
            this.addvoter = () => {
                ngDialog.openConfirm({
                    template: baseUrl +"/Areas/VotingApplication/votingapp/templates/addVoter.html",
                    className: 'ngdialog-theme-default',
                    scope: this.$scope,

                }).then(() => {
                    this.$scope.submitForm = function () {

                        if (this.$scope.userForm.$valid) {
                            alert('Choice is Added');
                        }
                    };

                });

                this.$scope.voter.Id = "";
                this.$scope.voter.Name = "";
            }

            //Voter Save method 
            this.savevoter = () => {
                this.party.voters.push({ Id: this.$scope.voter.Id, Name: this.$scope.voter.Name });
                ngDialog.closeAll();

            }

            //Voter Delete
            this.removevoter = function (Id) {
                var index = -1;
                var comArr = eval(this.$scope.voter);
                for (var i = 0; i < comArr.length; i++) {
                    if (comArr[i].Id === Id) {
                        index = i;
                        break;
                    }
                }

                ngDialog.openConfirm({
                    template: '<p>Are you sure You want to Delete ?<p>' +
                    '<button type="button" class="btn" ng-click="vm.deletevoter()"><i class="glyphicon glyphicon"></i>Yes</button>' +
                    '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>No</button>',
                    className: 'ngdialog-theme-default',
                    plain: true,
                    scope: this.$scope

                });
                this.deletevoter = () => {
                    if (index === -1) {
                        alert("Something gone wrong");
                    }

                    this.$scope.voter.splice(index, 1);
                    ngDialog.closeAll();
                };

            }

            //Voter & voterChance  Cancel method
            this.$scope.closeAll = () => {
                ngDialog.closeAll();
            };

            //New Question Add
            this.addQuestion = () => {

                ngDialog.openConfirm({
                    template: baseUrl+"/Areas/VotingApplication/votingapp/templates/addVoterChoice.html",
                    scope: this.$scope,
                    className: 'ngdialog-theme-default',
                }).then(() => {
                    this.$scope.submitForm = function () {

                        if (this.$scope.userForm.$valid) {

                        }

                    };

                })
                this.$scope.userObject.Id = "";
                this.$scope.userObject.option = "";
                this.$scope.objectIndex = '';
                this.$scope.questype.type = '';
            }

            //Question Edit
            this.edit = (id) => {
                this.$scope.objectIndex = id;
                this.$scope.userObject = angular.copy(this.party.voterQuestions[id]);
                ngDialog.openConfirm({
                    template: '<div class="well"><p>Are you want to modify this choice ?</p>' +
                    '<input type="text"  id="Id" placeholder="Id" ng-model="userObject.Id" />' +
                    '  <input type="text"  id="Name" placeholder="Name" ng-model="userObject.name" />' +
                    ' <input type="hidden" ng-model="objectIndex" class="ng-valid"> <button type="button" class="btn" ng-click="vm.updateques()"><i class="glyphicon glyphicon glyphicon-ok-circle"></i>Save</button>' +
                    '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>Cancel</button></div>',
                    plain: true,
                    scope: this.$scope,
                    className: 'ngdialog-theme-default'

                });
                this.updateques = function () {
                    console.log(this.$scope.objectIndex);
                    this.party.voterQuestions[id] = this.$scope.userObject;
                    ngDialog.closeAll();

                };

            }
            //Question Update

            //New Question Save
            this.save = function () {
                console.log(this.$scope.objectIndex);
                if (this.party.voterQuestions[this.$scope.objectIndex] == null, this.party.questiontype[this.$scope.objectIndex] == null) {

                    this.party.voterQuestions.push({ Id: this.$scope.userObject.Id, name: this.$scope.userObject.name, type: this.$scope.vm.Type.option });

                } else {

                    this.party.voterQuestions[this.$scope.objectIndex] = this.$scope.userObject
                    this.party.voterQuestions[this.$scope.objectIndex] = this.$scope.questype;
                }

                this.$scope.userObject = {};
                this.$scope.objectIndex = '';
                this.$scope.getType = ''

                ngDialog.closeAll();
            };

            // New Question  Delete
            this.removeRow = function (Id) {
                var index = -1;
                var comArr = eval(this.party.voterQuestions);
                for (var i = 0; i < comArr.length; i++) {
                    if (comArr[i].Id === Id) {
                        index = i;

                        break;
                    }
                }
                ngDialog.openConfirm({
                    template: '<p>Are you sure You want to Delete this Choice ?<p>' +
                    '<button type="button" class="btn" ng-click="vm.deletechoice()"><i class="glyphicon glyphicon"></i>Yes</button>' +
                    '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>No</button>',
                    className: 'ngdialog-theme-default',
                    plain: true,
                    scope: this.$scope
                });
                this.deletechoice = () => {
                    if (index === -1) {
                        alert("Something gone wrong");
                    }
                    this.party.voterQuestions.splice(index, 1);
                    ngDialog.closeAll();
                }
            }
            this.$scope.tab = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            }
            //TAB uib-accordion-heading
            this.tab = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false

            }  

            //Add Answers 
            this.addanswer = (quesId) => {

                var answersArray = [];
                for (var q in this.answerof) {
                    for (var i = 0; i < this.answerof[q].answers.length; i++) {
                        if (this.answerof[q].answers[i].quesId == quesId) {
                            answersArray = this.answerof[q].answers;
                            break;
                        }
                    }
                }

                ngDialog.openConfirm({
                    template: baseUrl+ "/Areas/VotingApplication/votingapp/templates/addAnswers.html",
                    className: 'ngdialog-theme-default',
                    scope: this.$scope,
                }).then(() => {
                    this.$scope.submitForm = function () {

                        if (this.$scope.userForm.$valie) {
                            console.log("Ans Save")
                        }
                    }

                })

                this.$scope.ans = answersArray;
                this.$scope.ans.Id = "";
                this.$scope.ans.Name = "";
                //Save

            }

            this.editans = (quesId, answers, ansId) => {
                this.$scope.index = answers;
                var answersArray = [];
                for (var q in this.answerof) {
                    for (var i = 0; i < this.answerof[q].answers.length; i++) {
                        if (this.answerof[q].answers[i].quesId == answers.quesId) {
                         
                                answersArray = this.answerof[q].answers
                                break;
                           
                        }
                    }
                }
                var index = -1;
                for (var i = 0; i < answersArray.length; i++) {
                    if (answersArray[i].Id === answers.Id) {
                        index = i;
                        break;
                    }
                }
                this.$scope.ans = answersArray[index];
                this.$scope.ans = angular.copy(this.$scope.ans);
                ngDialog.openConfirm({
                    template: '<div class="well"><p>Are you want to modify this choice ?</p>' +
                    '<input type="text"  id="Id" placeholder="Id" ng-model="ans.Id" />' +
                    '  <input type="text"  id="Name" placeholder="Name" ng-model="ans.name" />' +
                    ' <input type="hidden" ng-model="objectIndex" class="ng-valid"> <button type="button" class="btn" ng-click="vm.updateans()"><i class="glyphicon glyphicon glyphicon-ok-circle"></i>Save</button>' +
                    '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>Cancel</button></div>',
                    plain: true,
                    scope: this.$scope,
                    className: 'ngdialog-theme-default'

                });

            }

            //Update
            this.updateans = function () {
                console.log(this.$scope.ans);
                //_this.$scope.ans.name = _this.$scope.ans.name;
                //_this.$scope.ans.push({ Id: _this.$scope.ans.Id, name: _this.$scope.ans.name });
              var answersArray = [];
                for (var q in this.answerof) {
                    for (var i = 0; i <this.answerof[q].answers.length; i++) {
                        if (this.answerof[q].answers[i].quesId == this.$scope.ans.quesId) {
                            answersArray = this.answerof[q].answers;
                            break;
                        }
                    }
                }
                var index = -1;
                for (var i = 0; i < answersArray.length; i++) {
                    if (answersArray[i].Id === this.$scope.ans.Id) {
                        index = i;
                        break;
                    }
                }
                answersArray[index].name = this.$scope.ans.name;
                ngDialog.closeAll();
            };

            //Save
            this.saveans = () => {

                this.$scope.ans.push({ Id: this.$scope.ans.Id, name: this.$scope.ans.Name });
                ngDialog.closeAll();

            }
            //delete
            this.removeans = function (quesId, answers) {
                var index = -1;
                var answersArray = [];
                for (var q in this.answerof) {
                    for (var i = 0; i < this.answerof[q].answers.length; i++) {
                        if (this.answerof[q].answers[i].quesId == answers.quesId) {
                            answersArray = this.answerof[q].answers;
                            break;
                        }
                    }
                }

                for (var i = 0; i < answersArray.length; i++) {
                    if (answersArray[i].Id === answers.Id) {
                        index = i;
                        break;
                    }
                }


                ngDialog.openConfirm({
                    template: '<p>Are you sure you want to delete ? </p>' +
                    '<button type="button" class="btn" ng-click="vm.deleteans()"><i class="glyphicon glyphicon"></i>Yes</button>' +
                    '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>No</button>',
                    className: 'ngdialog-theme-default',
                    plain: true,
                    scope: this.$scope

                });
                this.deleteans = () => {
                    answersArray.splice(index, 1);
                    ngDialog.closeAll();

                }

            }

        }

        cancel(): void {
            this.stateService.home();
        }

        getvoteId(voteId): void {
            var result = this.service.getVoteById(this.voteid);
            result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                this.party = response.data;
                this.status = this.party.Statuses[0]
                console.log(this.party)
                this.$scope.userObject = this.party.voterQuestions;
                this.$scope.voter = this.party.voters;
                this.Type = this.party.questiontype[0];
                // this.questype = this.party.questiontype;
                this.$scope.questype = this.party.questiontype;
                this.answerof = this.party.voterQuestions;

            })

        };


        SaveParty(myForm): void {
            if (this.$scope.myForm.$valid) {
                var result = this.service.saveData(this.voteid, this.party);
                console.log(result)
                result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                    this.party = response.data;
                    this.stateService.home();
                });
            }
            else {
                alert("Enter the all required Field")
            }
        }

    }
    angular.module(AngularGlobals.votingModule)
        .controller(DetailController.id, DetailController);
}



