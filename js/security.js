$(document).ready(function(){
	$("#heading2").click(function(){
		$("#flipPanel2").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#heading3").click(function(){
		$("#flipPanel3").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#heading4").click(function(){
		$("#flipPanel4").slideToggle("slow");
	});
});

$(document).ready(function(){
	$("#heading5").click(function(){
		$("#flipPanel5").slideToggle("slow");
	});
});

function closepanel4(){
	$("#flipPanel4").slideUp("slow");
}

function closepanel5(){
	$("#flipPanel5").slideUp("slow");
}


$(document).ready(function(){
	$('.btnPhase').click(function () {

		$('.btnPhase').css('font-weight', 'normal');
		$('.btnPhase').css( 'background-color', 'RGB(15,111,198)');

		if($('#div' + $(this).attr('target')).css('display') == 'none'){
			$('.targetDiv').hide();
			$('.allRecords').hide();

			$('#div' + $(this).attr('target')).slideDown("slow");
			$(this).css('font-weight', '800');
			$(this).css( 'background-color', 'RGB(166,166,166)');
			$('.miniBtn').css( 'font-weight', 'normal' );
			$('.btnDevice').css( 'font-weight', 'normal' );
		}else{

	//$('.targetDiv').hide();
	//$('.allRecords').hide();
	$('.targetDiv').slideUp("slow");
	$('.allRecords').slideUp("slow");
	$('#div' + $(this).attr('target')).slideUp("slow");
}
});
});

//PAPER HANDLER
$(document).ready(function(){
	$("#btnPaper").click(function(){

		if($('.paperRecords').is(":visible")){
			$(".paperRecords").slideUp("slow");
		}else{
			$(".paperRecords").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnPaperStore").click(function(){

		if($('.paperRecordsStore').is(":visible")){
			$(".paperRecordsStore").slideUp("slow");
		}else{
			$(".paperRecordsStore").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnPaperUse").click(function(){

		if($('.paperRecordsUse').is(":visible")){
			$(".paperRecordsUse").slideUp("slow");
		}else{
			$(".paperRecordsUse").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnPaperShare").click(function(){

		if($('.paperRecordsShare').is(":visible")){
			$(".paperRecordsShare").slideUp("slow");
		}else{
			$(".paperRecordsShare").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnPaperArchive").click(function(){

		if($('.paperRecordsArchive').is(":visible")){
			$(".paperRecordsArchive").slideUp("slow");
		}else{
			$(".paperRecordsArchive").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnPaperDispose").click(function(){

		if($('.paperRecordsDispose').is(":visible")){
			$(".paperRecordsDispose").slideUp("slow");
		}else{
			$(".paperRecordsDispose").slideDown("slow");
		}

	});
});
//ELectronic Records
$(document).ready(function(){
	$("#btnElec").click(function(){

		if($('.electronicRecords').is(":visible")){
			$(".electronicRecords").slideUp("slow");
		}else{
			$(".electronicRecords").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnElecStore").click(function(){

		if($('.electronicRecordsStore').is(":visible")){
			$(".electronicRecordsStore").slideUp("slow");
		}else{
			$(".electronicRecordsStore").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnElecUse").click(function(){

		if($('.electronicRecordsUse').is(":visible")){
			$(".electronicRecordsUse").slideUp("slow");
		}else{
			$(".electronicRecordsUse").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnElecShare").click(function(){

		if($('.electronicRecordsShare').is(":visible")){
			$(".electronicRecordsShare").slideUp("slow");
		}else{
			$(".electronicRecordsShare").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnElecArchive").click(function(){

		if($('.electronicRecordsArchive').is(":visible")){
			$(".electronicRecordsArchive").slideUp("slow");
		}else{
			$(".electronicRecordsArchive").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnElecDispose").click(function(){

		if($('.electronicRecordsDispose').is(":visible")){
			$(".electronicRecordsDispose").slideUp("slow");
		}else{
			$(".electronicRecordsDispose").slideDown("slow");
		}
	});
});
//Spoken Records
$(document).ready(function(){
	$("#btnSpoken").click(function(){

		if($('.spokenInformation').is(":visible")){
			$(".spokenInformation").slideUp("slow");
		}else{
			$(".spokenInformation").slideDown("slow");
		}


	});
});

$(document).ready(function(){
	$("#btnSpokenStore").click(function(){

		if($('.spokenInformationStore').is(":visible")){
			$(".spokenInformationStore").slideUp("slow");
		}else{
			$(".spokenInformationStore").slideDown("slow");
		}

	});
});

$(document).ready(function(){
	$("#btnSpokenUse").click(function(){

		if($('.spokenInformationUse').is(":visible")){
			$(".spokenInformationUse").slideUp("slow");
		}else{
			$(".spokenInformationUse").slideDown("slow");
		}
	});
});

$(document).ready(function(){
	$("#btnSpokenShare").click(function(){

		if($('.spokenInformationShare').is(":visible")){
			$(".spokenInformationShare").slideUp("slow");
		}else{
			$(".spokenInformationShare").slideDown("slow");
		}
	});
});

$(document).ready(function(){
	$("#btnSpokenArchive").click(function(){

		if($('.spokenInformationArchive').is(":visible")){
			$(".spokenInformationArchive").slideUp("slow");
		}else{
			$(".spokenInformationArchive").slideDown("slow");
		}
	});
});

$(document).ready(function(){
	$("#btnSpokenDispose").click(function(){

		if($('.spokenInformationDispose').is(":visible")){
			$(".spokenInformationDispose").slideUp("slow");
		}else{
			$(".spokenInformationDispose").slideDown("slow");
		}
	});
});

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'hover',
	})  
});
//button highlight
function boldButton(num){

	$('.miniBtn').css( 'font-weight', 'normal');
	$('.miniBtn').css( 'background-color', 'RGB(15,111,198)');
	$('.btnDevice').css( 'font-weight', 'normal');
	$('.btnDevice').css( 'background-color', 'RGB(15,111,198)');

	$('.btn'+num).css( 'font-weight', '800');
	//$('.btn'+num).css( 'background-color', 'red' );
	$('.btn'+num).css( 'background-color', 'RGB(166,166,166)');
}

function boldMiniButton(num, mainNum){
	
	$('.btnDevice').css( 'font-weight', 'normal' );
	$('.btnDevice').css( 'background-color', 'RGB(15,111,198)');
	
	$('.miniBtn').css( 'font-weight', 'normal' );
	$('.miniBtn').css( 'background-color', 'RGB(15,111,198)');
	
	$('.btn'+mainNum).css( 'font-weight', '900' );
	$('.btn'+mainNum).css( 'background-color', 'RGB(166,166,166)');

	$('.minibtn'+num).css( 'font-weight', '900' );
	$('.minibtn'+num).css( 'background-color', 'RGB(166,166,166)');
}