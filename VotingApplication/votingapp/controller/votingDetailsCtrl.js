var votingModule;
(function (votingModule) {
    "use strict";
    var DetailController = (function () {
        function DetailController(voteid, service, stateService, ngDialog, $scope, $timeout, constants) {
            var _this = this;
            this.service = service;
            this.ngDialog = ngDialog;
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
            this.addvoter = function () {
                ngDialog.openConfirm({
                    template: baseUrl + "/Areas/VotingApplication/votingapp/templates/addVoter.html",
                    className: 'ngdialog-theme-default',
                    scope: _this.$scope,
                }).then(function () {
                    _this.$scope.submitForm = function () {
                        if (this.$scope.userForm.$valid) {
                            alert('Choice is Added');
                        }
                    };
                });
                _this.$scope.voter.Id = "";
                _this.$scope.voter.Name = "";
            };
            //Voter Save method 
            this.savevoter = function () {
                _this.party.voters.push({ Id: _this.$scope.voter.Id, Name: _this.$scope.voter.Name });
                ngDialog.closeAll();
            };
            //Voter Delete
            this.removevoter = function (Id) {
                var _this = this;
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
                this.deletevoter = function () {
                    if (index === -1) {
                        alert("Something gone wrong");
                    }
                    _this.$scope.voter.splice(index, 1);
                    ngDialog.closeAll();
                };
            };
            //Voter & voterChance  Cancel method
            this.$scope.closeAll = function () {
                ngDialog.closeAll();
            };
            //New Question Add
            this.addQuestion = function () {
                ngDialog.openConfirm({
                    template: baseUrl + "/Areas/VotingApplication/votingapp/templates/addVoterChoice.html",
                    scope: _this.$scope,
                    className: 'ngdialog-theme-default',
                }).then(function () {
                    _this.$scope.submitForm = function () {
                        if (this.$scope.userForm.$valid) {
                        }
                    };
                });
                _this.$scope.userObject.Id = "";
                _this.$scope.userObject.option = "";
                _this.$scope.objectIndex = '';
                _this.$scope.questype.type = '';
            };
            //Question Edit
            this.edit = function (id) {
                _this.$scope.objectIndex = id;
                _this.$scope.userObject = angular.copy(_this.party.voterQuestions[id]);
                ngDialog.openConfirm({
                    template: '<div class="well"><p>Are you want to modify this choice ?</p>' +
                        '<input type="text"  id="Id" placeholder="Id" ng-model="userObject.Id" />' +
                        '  <input type="text"  id="Name" placeholder="Name" ng-model="userObject.name" />' +
                        ' <input type="hidden" ng-model="objectIndex" class="ng-valid"> <button type="button" class="btn" ng-click="vm.updateques()"><i class="glyphicon glyphicon glyphicon-ok-circle"></i>Save</button>' +
                        '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>Cancel</button></div>',
                    plain: true,
                    scope: _this.$scope,
                    className: 'ngdialog-theme-default'
                });
                _this.updateques = function () {
                    console.log(this.$scope.objectIndex);
                    this.party.voterQuestions[id] = this.$scope.userObject;
                    ngDialog.closeAll();
                };
            };
            //Question Update
            //New Question Save
            this.save = function () {
                console.log(this.$scope.objectIndex);
                if (this.party.voterQuestions[this.$scope.objectIndex] == null, this.party.questiontype[this.$scope.objectIndex] == null) {
                    this.party.voterQuestions.push({ Id: this.$scope.userObject.Id, name: this.$scope.userObject.name, type: this.$scope.vm.Type.option });
                }
                else {
                    this.party.voterQuestions[this.$scope.objectIndex] = this.$scope.userObject;
                    this.party.voterQuestions[this.$scope.objectIndex] = this.$scope.questype;
                }
                this.$scope.userObject = {};
                this.$scope.objectIndex = '';
                this.$scope.getType = '';
                ngDialog.closeAll();
            };
            // New Question  Delete
            this.removeRow = function (Id) {
                var _this = this;
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
                this.deletechoice = function () {
                    if (index === -1) {
                        alert("Something gone wrong");
                    }
                    _this.party.voterQuestions.splice(index, 1);
                    ngDialog.closeAll();
                };
            };
            this.$scope.tab = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            };
            //TAB uib-accordion-heading
            this.tab = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            };
            //Add Answers 
            this.addanswer = function (quesId) {
                var answersArray = [];
                for (var q in _this.answerof) {
                    for (var i = 0; i < _this.answerof[q].answers.length; i++) {
                        if (_this.answerof[q].answers[i].quesId == quesId) {
                            answersArray = _this.answerof[q].answers;
                            break;
                        }
                    }
                }
                ngDialog.openConfirm({
                    template: baseUrl + "/Areas/VotingApplication/votingapp/templates/addAnswers.html",
                    className: 'ngdialog-theme-default',
                    scope: _this.$scope,
                }).then(function () {
                    _this.$scope.submitForm = function () {
                        if (this.$scope.userForm.$valie) {
                            console.log("Ans Save");
                        }
                    };
                });
                _this.$scope.ans = answersArray;
                _this.$scope.ans.Id = "";
                _this.$scope.ans.Name = "";
                //Save
            };
            this.editans = function (quesId, answers, ansId) {
                _this.$scope.index = answers;
                var answersArray = [];
                for (var q in _this.answerof) {
                    for (var i = 0; i < _this.answerof[q].answers.length; i++) {
                        if (_this.answerof[q].answers[i].quesId == answers.quesId) {
                            answersArray = _this.answerof[q].answers;
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
                _this.$scope.ans = answersArray[index];
                _this.$scope.ans = angular.copy(_this.$scope.ans);
                ngDialog.openConfirm({
                    template: '<div class="well"><p>Are you want to modify this choice ?</p>' +
                        '<input type="text"  id="Id" placeholder="Id" ng-model="ans.Id" />' +
                        '  <input type="text"  id="Name" placeholder="Name" ng-model="ans.name" />' +
                        ' <input type="hidden" ng-model="objectIndex" class="ng-valid"> <button type="button" class="btn" ng-click="vm.updateans()"><i class="glyphicon glyphicon glyphicon-ok-circle"></i>Save</button>' +
                        '<button type="button" class="btn" ng-click="closeAll()"><i class="glyphicon glyphicon "></i>Cancel</button></div>',
                    plain: true,
                    scope: _this.$scope,
                    className: 'ngdialog-theme-default'
                });
            };
            //Update
            this.updateans = function () {
                console.log(this.$scope.ans);
                //_this.$scope.ans.name = _this.$scope.ans.name;
                //_this.$scope.ans.push({ Id: _this.$scope.ans.Id, name: _this.$scope.ans.name });
                var answersArray = [];
                for (var q in this.answerof) {
                    for (var i = 0; i < this.answerof[q].answers.length; i++) {
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
            this.saveans = function () {
                _this.$scope.ans.push({ Id: _this.$scope.ans.Id, name: _this.$scope.ans.Name });
                ngDialog.closeAll();
            };
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
                this.deleteans = function () {
                    answersArray.splice(index, 1);
                    ngDialog.closeAll();
                };
            };
        }
        DetailController.prototype.cancel = function () {
            this.stateService.home();
        };
        DetailController.prototype.getvoteId = function (voteId) {
            var _this = this;
            var result = this.service.getVoteById(this.voteid);
            result.then(function (response) {
                _this.party = response.data;
                _this.status = _this.party.Statuses[0];
                console.log(_this.party);
                _this.$scope.userObject = _this.party.voterQuestions;
                _this.$scope.voter = _this.party.voters;
                _this.Type = _this.party.questiontype[0];
                // this.questype = this.party.questiontype;
                _this.$scope.questype = _this.party.questiontype;
                _this.answerof = _this.party.voterQuestions;
            });
        };
        ;
        DetailController.prototype.SaveParty = function (myForm) {
            var _this = this;
            if (this.$scope.myForm.$valid) {
                var result = this.service.saveData(this.voteid, this.party);
                console.log(result);
                result.then(function (response) {
                    _this.party = response.data;
                    _this.stateService.home();
                });
            }
            else {
                alert("Enter the all required Field");
            }
        };
        DetailController.id = votingModule.AngularGlobals.votingModule + ".DetailController";
        DetailController.$inject = ["voteId", "votingModule.services.VotingModuleService",
            "votingModule.services.VotingModuleStateService", "ngDialog", "$scope", "$timeout", app.core.AngularGlobals.appCoreConstants];
        return DetailController;
    }());
    votingModule.DetailController = DetailController;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(DetailController.id, DetailController);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingDetailsCtrl.js.map