var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var newResourceSchema = new Schema({
			approved : Boolean,
			resourceBody:{
				generalPhase:
				{
					contactInfo:
					{
						organizationName : String,
						mainPhoneLine : String,
						referralPhoneLine : String,
						TwentyFourHoursCrisisLine : String,
						textLine : String,
						email: String,
						physicalAddress: String,
						website:String
					},
	
					pointPerson:
					{
						pointPersonName : String,
						pointPersonTitle : String,
						pointPersonPhone: String,
						pointPersonEmail:String
					},
	
					selfReferringClient:
					{
						email: Boolean,
						referralNumber: Boolean,
						primaryNumber: Boolean,
						text: Boolean,
						walkIn: Boolean
					},
					typeOfOrganization:
					{
						nonProfit: Boolean,
						government: Boolean,
						faithBased: Boolean,
						privateOrganization: Boolean,
						academic: Boolean,
						healthcare: Boolean
					},
					whoInteractsWithClientsInitially:
					{
						staffWithProfessionalLicense: Boolean,
						staffWithoutProfessionalLicense: Boolean,
						volunteersWithStaffSupervision: Boolean,
						onlyVolunteeers:Boolean,
						other: String
					},
					memberOfHumanTraffickingCoalition: String,
					screenForHumanTrafficking:
					{
						referCasesOut: Boolean,
						serveVictimsOfHumanTrafficking: Boolean,
						typeOfVictimsServed:
						{
							adultLaborMale: Boolean,
							adultLaborFemale: Boolean,
							minorLaborMale: Boolean,
							minorLaborFemale: Boolean,
							adultSexTraffickingFemale: Boolean,
							adultSexTraffickingMale: Boolean,
							CSECFemale:Boolean,
							CSECMale:Boolean
						},
						serveTransgenderFemales:Boolean,
						serveTransgenderMales:Boolean
					},
					targetedPopulations:
					{
						children: Boolean,
						adolescents: Boolean,
						youngAdults:Boolean,
						transitionAged:Boolean,
						adults:Boolean,
						men:Boolean,
						women:Boolean,
						LGB:Boolean,
						transgenderFemaleToMale:Boolean,
						transgenderMaleToFemale:Boolean,
						seniors:Boolean,
						peopleWithDisabilities:Boolean,
						wardsOfCourt:Boolean,
						dependentsOfCourt: Boolean,
						immigrants: Boolean,
						other: String
					},
					location:
					{
						city:String,
						county: String
					},
					languageCapacity:
					{
						english:Boolean,
						spanish:Boolean,
						vietnamese:Boolean,
						mandarinChinese:Boolean,
						cantoneseChinese:Boolean,
						hindi:Boolean,
						punjabi:Boolean,
						tagalog:Boolean,
						farsi:Boolean,
						arabic:Boolean,
						americanSignLanguage:Boolean,
						burmese:Boolean,
						russian:Boolean,
						korean:Boolean,
						other:String
					},
					specialAccomodations:
					{
						TTY:Boolean,
						Wheelchair:Boolean,
						serviceAnimals:Boolean,
						other:String
					},
					eligibilityRequirements:
					{
						lowIncome:Boolean,
						mediCalRecipient:Boolean,
						USLegalResidency:Boolean,
						inCountyResidency:Boolean,
						ageChildren:Boolean,
						ageAdolescents:Boolean,
						ageYoungAdults:Boolean,
						ageTransitionAgedYouth:Boolean,
						ageAdults:Boolean,
						referralFromSpecificAgency:String,
						soberDetox:Boolean,
						other:String
					},
					serviceCategory:
					{
						traumaInformed:Boolean,
						victimCentered:Boolean,
						confidential:Boolean,
						survivorLedInformed:Boolean
					}
				},
	
				crisisPhase:
				{
					TwentyFourHourHotline:Boolean,
					TwentyFourHourHotlineSpecifics:{
						confidential: Boolean,
						anonymous: Boolean,
						callerIdRecorded:Boolean,
						capacityToFieldLanguageCalls:Boolean,
						traumaInformed: Boolean,
						victimCentered:Boolean,
						TwentyFourHourLiveAnswer:Boolean,
						callerMustLeaveVoicemail:Boolean
					},
					shelter:Boolean,
					shelterSpecifics:{
						adultMale:Boolean,
						adultFemale:Boolean,
						familiesWithDependents:Boolean,
						limitsOnDependents: String,
						unaccompaniedMinorMale:Boolean,
						unaccompaniedMinorFemale:Boolean,
						LGB:Boolean,
						transgenderFemaleToMale:Boolean,
						transgenderMaleToFemale:Boolean,
						outofCountyResident:Boolean,
						outofStateResident:Boolean
					},
					otherShelterSpecifications:{
						confidentialLocation:Boolean,
						emergencyHotelStay:Boolean,
						maximumLengthOfStay: String
					},
					inPersonResponse:{
						confidential:Boolean,
						traumaInformed:Boolean
					},
					circumstances:{
						respondToPDCalls:Boolean,
						respondToPDCallsSpecifics:{
							inTheField:Boolean,
							atPoliceDepartment:Boolean
						},
						respondToJuvenileHallsCalls:Boolean,
						respondToDFCSCalls:Boolean,
						respondToServiceProviders:Boolean,
						respondToMedical:Boolean
					},
					responseTime:String,
					travelRadius:String,
					inCountyOnly:Boolean,
					genderOfResponder:{
						genderOfResponderMatchesGenderOfVictim: Boolean,
						survivorCanRequest: Boolean
					},
					LanguageCapacity:Boolean,
					Food:Boolean,
					CaseManagementConfidential:Boolean,
					crisisIntervention:Boolean,
					peerCounseling:Boolean,
					safetyPlanning:Boolean,
					basicAmenities:Boolean,
					callingCardsOrOtherMethodsOfFacilitatingCommunication:Boolean,
					transportationToSafeLocation:Boolean,
					emergencyMedical:Boolean,
					emergencyDental:Boolean,
					assistConnectingWithEmergencyMedical:Boolean
				},
				transitionalServices:
				{
					housing:{
						adultMale:Boolean,
						adultFemale:Boolean,
						familiesWithDependents:Boolean,
						limitsOnDependents: String,
						unaccompaniedMinorMale:Boolean,
						unaccompaniedMinorFemale:Boolean,
						LGB:Boolean,
						transgenderFemaleToMale:Boolean,
						transgenderMaleToFemale:Boolean,
						outofCountyResident:Boolean,
						outofStateResident:Boolean
					},
					otherHousingSpecifications:{
						confidentialLocation:Boolean,
						emergencyHotelStay:Boolean,
						maximumLengthOfStay: String
					},
					rentalAssistance:{
						firstMonthsRent:Boolean,
						deposit:Boolean,
						subsidyForExisting:Boolean
					},
					caseManagement:{
						confidentialCaseManagement:Boolean,
						nonConfidentialCaseManager:Boolean
					},
					financialSupportForIndependentLiving:Boolean,
					financialAssistanceForSchoolSuppliesOrJobPlacement:Boolean,
					peerCounseling:Boolean,
					continuingTherapy:Boolean,
					mentalHealth:Boolean,
					transportationToNecessaryAppointments:Boolean,
					accompanimentAndAdvocacy:{
						confidentialAdvocate:Boolean,
						nonConfidentialAdvocate:Boolean,
						crimeVictimRightsAttorney:Boolean
					},
					accompanimentAdvocacyProvidedTo:{
						socialServicesAppointment:Boolean,
						lawEnforcementInteraction:Boolean,
						courtHearings:Boolean,
						legalServicesAppointments:Boolean
					},
					immigrationProcessAssistance:Boolean,
					medicalServices:Boolean,
					substanceAbuseTreatment:Boolean,
					dentalServices:Boolean,
					survivorLedEfforts:Boolean
				},
				longTermServices:
				{
					caseManagement:{
						confidentialCaseManagement:Boolean,
						nonConfidentialCaseManager:Boolean
					},
					financialAssistance:String,
					foodClothingAssistance:Boolean,
					transportationAssistance:Boolean,
					rentalAssistance:{
						firstMonthsRent:Boolean,
						deposit:Boolean,
						subsidyForExisting:Boolean
					},
					permanentHousing:Boolean,
					repatriation:Boolean,
					familyReunification:Boolean,
					vocationalTraining:Boolean,
					jobPlacement:Boolean,
					adultDiploma:Boolean,
					ESL:Boolean,
					parentingClasses:Boolean,
					peerCounseling:Boolean,
					therapy:Boolean,
					mentalHealth:Boolean,
					supportGroup:Boolean,
					survivorLeadershipOpportunities:Boolean,
					mentorship:Boolean,
					legalAssistance:Boolean,
					legalAssistanceSpecifics:{
						immigration:Boolean,
						criminalDefense:Boolean,
						civilRestitution:Boolean,
						restrainingOrders:Boolean,
						familyLaw:Boolean,
						laborAndEmployments:Boolean,
						expungement:Boolean,
						housingLaw:Boolean,
						economicBenefits:Boolean,
						educationLaw:Boolean,
						healthCareLaw:Boolean,
						guardianship:Boolean,
						identityTheft:Boolean,
						creditRepair:Boolean,
						driversLicenseReinstatement:Boolean,
						homelessCourt:Boolean,
						taxLaw:Boolean
					}
				},
				other:{
					otherServices:String,
					otherHTTrainings:{
						forEmployees:Boolean,
						toTheCommunity:Boolean,
						otherThings:String
					},
					htRelatedTrainingsNeeded:{
						ht101:Boolean,
						laborTrafficking:Boolean,
						CSEC:Boolean,
						traumaInformed:Boolean,
						collaborativeResponse:Boolean,
						traffickingVictimAssessment:Boolean,
						needsAssessment:Boolean,
						caseManagementAdvocacy:Boolean,
						publicBenefits:Boolean,
						legalRemedies:Boolean,
						crimeVictimRights:Boolean,
						professionSpecific:{
							legal:Boolean,
							mentalHealth:Boolean,
							lawEnforcement:Boolean,
							socialServices:Boolean,
							serviceProviders:Boolean,
							clinicalHealthcare:Boolean
						}
					}
				}
			}
});


//Create model based on schema. Third argument is collection name- PLURALIZE in DB, or mongoose will pluralize for you (problems??)..!
var newResource = mongoose.model('newResource', newResourceSchema, 'nta_guide_preApprovals');

module.exports= {
	newResource : newResource
};

