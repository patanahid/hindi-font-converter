var legacy_text_var = ""; // in Kruti Dev
var unicode_text_var = ""; // in Unicode

// Function to process the data
function kruti_to_unicode(input_text)
{

var array_one = new Array(

"ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”",

"å","ƒ","„","…","†","‡","ˆ","‰","Š","‹", 

"¶+","d+","[+k","[+","x+","T+","t+","M+","<+","Q+",";+","j+","u+",
"Ùk","Ù","ä","–","—","é","™","=kk","f=k",  

"à","á","â","ã","ºz","º","í","{k","{","=","«",   
"Nî","Vî","Bî","Mî","<î","|","K","}",
"J","Vª","Mª","<ªª","Nª","Ø","Ý","nzZ","æ","ç","Á","xz","#",":",

"v‚","vks","vkS","vk","v","b±","Ã","bZ","b","m","Å",",s",",","_",

"ô","d","Dk","D","£","[k","[","x","Xk","X","Ä","?k","?","³", 
"p","Pk","P","N","t","Tk","T",">","÷","¥",

"ê","ë","V","B","ì","ï","M+","<+","M","<",".k",".",    
"r","Rk","R","Fk","F",")","n","/k","èk","/","Ë","è","u","Uk","U",   

"i","Ik","I","Q","¶","c","Ck","C","Hk","H","e","Ek","E",
";","¸","j","y","Yk","Y","G","o","Ok","O",
"'k","'","\"k","\"","l","Lk","L","g", 

"È","z", 
"Ì","Í","Î","Ï","Ñ","Ò","Ó","Ô","Ö","Ø","Ù","Ük","Ü",

"‚","¨","ks","©","kS","k","h","q","w","`","s","¢","S",
"a","¡","%","W","•","·","∙","·","~j","~","\\","+"," ः",
"^","*","Þ","ß","(","¼","½","¿","À","¾","A","-","&","&","Œ","]","~ ","@",
"ाे","ाॅ","ंै","े्र","अौ","अो","आॅ")

var array_two = new Array(

"॰","QZ+","sa","a","र्द्ध","Z","\"","\"","'","'",

"०","१","२","३","४","५","६","७","८","९",   

"फ़्","क़","ख़","ख़्","ग़","ज़्","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",    
"त्त","त्त्","क्त","दृ","कृ","न्न","न्न्","=k","f=",

"ह्न","ह्य","हृ","ह्म","ह्र","ह्","द्द","क्ष","क्ष्","त्र","त्र्", 
"छ्य","ट्य","ठ्य","ड्य","ढ्य","द्य","ज्ञ","द्व",
"श्र","ट्र","ड्र","ढ्र","छ्र","क्र","फ्र","र्द्र","द्र","प्र","प्र","ग्र","रु","रू",

"ऑ","ओ","औ","आ","अ","ईं","ई","ई","इ","उ","ऊ","ऐ","ए","ऋ",

"क्क","क","क","क्","ख","ख","ख्","ग","ग","ग्","घ","घ","घ्","ङ",
"च","च","च्","छ","ज","ज","ज्","झ","झ्","ञ",

"ट्ट","ट्ठ","ट","ठ","ड्ड","ड्ढ","ड़","ढ़","ड","ढ","ण","ण्",   
"त","त","त्","थ","थ्","द्ध","द","ध","ध","ध्","ध्","ध्","न","न","न्",    

"प","प","प्","फ","फ्","ब","ब","ब्","भ","भ्","म","म","म्",  
"य","य्","र","ल","ल","ल्","ळ","व","व","व्",   
"श","श्","ष","ष्","स","स","स्","ह", 

"ीं","्र",    
"द्द","ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्",

"ॉ","ो","ो","ौ","ौ","ा","ी","ु","ू","ृ","े","े","ै",
"ं","ँ","ः","ॅ","ऽ","ऽ","ऽ","ऽ","्र","्","?","़",":",
"‘","’","“","”",";","(",")","{","}","=","।",".","-","µ","॰",",","् ","/",
"ो","ॉ","ैं","्रे","औ","ओ","ऑ")

var array_one_length = array_one.length ;

var modified_substring = input_text  ;

    var text_size = input_text.length ;

    var processed_text = '' ;  

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;

    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (input_text.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

var modified_substring = input_text.slice(sthiti1, sthiti2);

    Replace_Symbols( ) ;

    processed_text += modified_substring ;

    return processed_text  ;
   }

function Replace_Symbols( )
{

if ( modified_substring != "" )  
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

{

idx = 0  ;  

while (idx != -1 ) 
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} 
} 

   modified_substring = modified_substring.replace( /±/g , "Zं" ) ; 

modified_substring = modified_substring.replace( /Æ/g , "र्f" ) ;  

var position_of_i = modified_substring.indexOf( "f" )

while ( position_of_i != -1 )  
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "f" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "ि" ) 
position_of_i = modified_substring.search( /f/ , position_of_i + 1 ) 

} 

modified_substring = modified_substring.replace( /Ç/g , "fa" ) ; 
modified_substring = modified_substring.replace( /É/g , "र्fa" ) ; 

var position_of_i = modified_substring.indexOf( "fa" )

while ( position_of_i != -1 )  
{
var character_next_to_ip2 = modified_substring.charAt( position_of_i + 2 )
var character_to_be_replaced = "fa" + character_next_to_ip2
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_ip2 + "िं" ) 
position_of_i = modified_substring.search( /fa/ , position_of_i + 2 ) 

} 

modified_substring = modified_substring.replace( /Ê/g , "ीZ" ) ; 

/*
var position_of_i = modified_substring.indexOf( "h" )

while ( position_of_i != -1 )  
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "h" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "ी" ) 
position_of_i = modified_substring.search( /h/ , position_of_i + 1 ) 

} 
*/

var position_of_wrong_ee = modified_substring.indexOf( "ि्" ) 

while ( position_of_wrong_ee != -1 )  

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var character_to_be_replaced = "ि्" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( character_to_be_replaced , "्" + consonent_next_to_wrong_ee + "ि" ) 
position_of_wrong_ee = modified_substring.search( /ि्/ , position_of_wrong_ee + 2 ) 

} 

set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ" 

var position_of_R = modified_substring.indexOf( "Z" )

while ( position_of_R > 0 )  
{
probable_position_of_half_r = position_of_R - 1 ;

var character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )

while ( set_of_matras.match( character_at_probable_position_of_half_r ) != null )  

   {   probable_position_of_half_r = probable_position_of_half_r - 1 ;
       character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

   } 

   var previous_to_position_of_half_r = probable_position_of_half_r - 1 ;

   if (previous_to_position_of_half_r > 0)  
   {  var character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )

      while ("्".match( character_previous_to_position_of_half_r ) != null ) 

      {  probable_position_of_half_r = previous_to_position_of_half_r - 1 ;
         character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

         previous_to_position_of_half_r = probable_position_of_half_r - 1 ;
         character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )

      } 
   } 

character_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
new_replacement_string = "र्" + character_to_be_replaced ; 
character_to_be_replaced = character_to_be_replaced + "Z" ;
modified_substring = modified_substring.replace( character_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "Z" ) ;

} 

} 

} 

} 


function unicode_to_krutidev_10(unicode_text_var = "", max_text_size = 6000) {
  var array_one = new Array(
    // ignore all nuktas except in ड़ and ढ़
    "‘",
    "’",
    "“",
    "”",
    "(",
    ")",
    "{",
    "}",
    "=",
    "।",
    "?",
    "-",
    "µ",
    "॰",
    ",",
    ".",
    "् ",
    "०",
    "१",
    "२",
    "३",
    "४",
    "५",
    "६",
    "७",
    "८",
    "९",
    "x",

    "फ़्",
    "क़",
    "ख़",
    "ग़",
    "ज़्",
    "ज़",
    "ड़",
    "ढ़",
    "फ़",
    "य़",
    "ऱ",
    "ऩ", // one-byte nukta varNas
    "त्त्",
    "त्त",
    "क्त",
    "दृ",
    "कृ",

    "ह्न",
    "ह्य",
    "हृ",
    "ह्म",
    "ह्र",
    "ह्",
    "द्द",
    "क्ष्",
    "क्ष",
    "त्र्",
    "त्र",
    "ज्ञ",
    "छ्य",
    "ट्य",
    "ठ्य",
    "ड्य",
    "ढ्य",
    "द्य",
    "द्व",
    "श्र",
    "ट्र",
    "ड्र",
    "ढ्र",
    "छ्र",
    "क्र",
    "फ्र",
    "द्र",
    "प्र",
    "ग्र",
    "रु",
    "रू",
    "्र",

    "ओ",
    "औ",
    "आ",
    "अ",
    "ई",
    "इ",
    "उ",
    "ऊ",
    "ऐ",
    "ए",
    "ऋ",

    "क्",
    "क",
    "क्क",
    "ख्",
    "ख",
    "ग्",
    "ग",
    "घ्",
    "घ",
    "ङ",
    "चै",
    "च्",
    "च",
    "छ",
    "ज्",
    "ज",
    "झ्",
    "झ",
    "ञ",

    "ट्ट",
    "ट्ठ",
    "ट",
    "ठ",
    "ड्ड",
    "ड्ढ",
    "ड",
    "ढ",
    "ण्",
    "ण",
    "त्",
    "त",
    "थ्",
    "थ",
    "द्ध",
    "द",
    "ध्",
    "ध",
    "न्",
    "न",

    "प्",
    "प",
    "फ्",
    "फ",
    "ब्",
    "ब",
    "भ्",
    "भ",
    "म्",
    "म",
    "य्",
    "य",
    "र",
    "ल्",
    "ल",
    "ळ",
    "व्",
    "व",
    "श्",
    "श",
    "ष्",
    "ष",
    "स्",
    "स",
    "ह",

    "ऑ",
    "ॉ",
    "ो",
    "ौ",
    "ा",
    "ी",
    "ु",
    "ू",
    "ृ",
    "े",
    "ै",
    "ं",
    "ँ",
    "ः",
    "ॅ",
    "ऽ",
    "् ",
    "्"
  );

  var array_two = new Array(
    "^",
    "*",
    "Þ",
    "ß",
    "¼",
    "½",
    "¿",
    "À",
    "¾",
    "A",
    "\\",
    "&",
    "&",
    "Œ",
    "]",
    "-",
    "~ ",
    "å",
    "ƒ",
    "„",
    "…",
    "†",
    "‡",
    "ˆ",
    "‰",
    "Š",
    "‹",
    "Û",

    "¶",
    "d",
    "[k",
    "x",
    "T",
    "t",
    "M+",
    "<+",
    "Q",
    ";",
    "j",
    "u",
    "Ù",
    "Ùk",
    "ä",
    "–",
    "—",

    "à",
    "á",
    "â",
    "ã",
    "ºz",
    "º",
    "í",
    "{",
    "{k",
    "«",
    "=",
    "K",
    "Nî",
    "Vî",
    "Bî",
    "Mî",
    "<î",
    "|",
    "}",
    "J",
    "Vª",
    "Mª",
    "<ªª",
    "Nª",
    "Ø",
    "Ý",
    "æ",
    "ç",
    "xz",
    "#",
    ":",
    "z",

    "vks",
    "vkS",
    "vk",
    "v",
    "bZ",
    "b",
    "m",
    "Å",
    ",s",
    ",",
    "_",

    "D",
    "d",
    "ô",
    "[",
    "[k",
    "X",
    "x",
    "?",
    "?k",
    "³",
    "pkS",
    "P",
    "p",
    "N",
    "T",
    "t",
    "÷",
    ">",
    "¥",

    "ê",
    "ë",
    "V",
    "B",
    "ì",
    "ï",
    "M",
    "<",
    ".",
    ".k",
    "R",
    "r",
    "F",
    "Fk",
    ")",
    "n",
    "/",
    "/k",
    "U",
    "u",

    "I",
    "i",
    "¶",
    "Q",
    "C",
    "c",
    "H",
    "Hk",
    "E",
    "e",
    "¸",
    ";",
    "j",
    "Y",
    "y",
    "G",
    "O",
    "o",
    "'",
    "'k",
    '"',
    '"k',
    "L",
    "l",
    "g",

    "v‚",
    "‚",
    "ks",
    "kS",
    "k",
    "h",
    "q",
    "w",
    "`",
    "s",
    "S",
    "a",
    "¡",
    "%",
    "W",
    "·",
    "~ ",
    "~"
  ); // "~j"

  //************************************************************
  //Put "Enter chunk size:" line before "<textarea name= ..." if required to be used.
  //************************************************************
  //Enter chunk size: <input type="text" name="chunksize" value="6000" size="7" maxsize="7" style="text-align:right"><br/><br/>
  //************************************************************
  // The following two characters are to be replaced through proper checking of locations:

  // "र्" (reph)
  // "Z" )

  // "ि"
  // "f" )

  var array_one_length = array_one.length;

  var modified_substring = unicode_text_var;

  //****************************************************************************************
  //  Break the long text into small bunches of max. max_text_size  characters each.
  //****************************************************************************************
  var text_size = unicode_text_var.length;

  var processed_text = ""; //blank

  var sthiti1 = 0;
  var sthiti2 = 0;
  var chale_chalo = 1;

  //************************************************************
  // var max_text_size = chunksize;
  // alert(max_text_size);
  //************************************************************

  while (chale_chalo == 1) {
    sthiti1 = sthiti2;

    if (sthiti2 < text_size - max_text_size) {
      sthiti2 += max_text_size;
      while (unicode_text_var.charAt(sthiti2) != " ") {
        sthiti2--;
      }
    } else {
      sthiti2 = text_size;
      chale_chalo = 0;
    }

    var modified_substring = unicode_text_var.substring(sthiti1, sthiti2);

    Replace_Symbols();

    processed_text += modified_substring;

    //****************************************************************************************
    //  Breaking part code over
    //****************************************************************************************
    //  processed_text = processed_text.replace( /mangal/g , "Krutidev010" ) ;

    legacy_text_var = processed_text;
  }

  return legacy_text_var;
  //**************************************************

  function Replace_Symbols() {
    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "") {
      // first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

      modified_substring = modified_substring.replace(/क़/, "क़");
      modified_substring = modified_substring.replace(/ख़‌/g, "ख़");
      modified_substring = modified_substring.replace(/ग़/g, "ग़");
      modified_substring = modified_substring.replace(/ज़/g, "ज़");
      modified_substring = modified_substring.replace(/ड़/g, "ड़");
      modified_substring = modified_substring.replace(/ढ़/g, "ढ़");
      modified_substring = modified_substring.replace(/ऩ/g, "ऩ");
      modified_substring = modified_substring.replace(/फ़/g, "फ़");
      modified_substring = modified_substring.replace(/य़/g, "य़");
      modified_substring = modified_substring.replace(/ऱ/g, "ऱ");

      // code for replacing "ि" (chhotee ee kii maatraa) with "f"  and correcting its position too.

      var position_of_f = modified_substring.indexOf("ि");
      while (position_of_f != -1) {
        //while-02
        var character_left_to_f = modified_substring.charAt(position_of_f - 1);
        modified_substring = modified_substring.replace(
          character_left_to_f + "ि",
          "f" + character_left_to_f
        );

        position_of_f = position_of_f - 1;

        while (
          (modified_substring.charAt(position_of_f - 1) == "्") &
          (position_of_f != 0)
        ) {
          var string_to_be_replaced =
            modified_substring.charAt(position_of_f - 2) + "्";
          modified_substring = modified_substring.replace(
            string_to_be_replaced + "f",
            "f" + string_to_be_replaced
          );

          position_of_f = position_of_f - 2;
        }
        position_of_f = modified_substring.search(/ि/, position_of_f + 1); // search for f ahead of the current position.
      } // end of while-02 loop
      //************************************************************
      //     modified_substring = modified_substring.replace( /fर्/g , "£"  )  ;
      //************************************************************
      // Eliminating "र्" and putting  Z  at proper position for this.

      set_of_matras = "ािीुूृेैोौं:ँॅ";

      modified_substring += "  "; // add two spaces after the string to avoid UNDEFINED char in the following code.

      var position_of_half_R = modified_substring.indexOf("र्");
      while (position_of_half_R > 0) {
        // while-04
        // "र्"  is two bytes long
        var probable_position_of_Z = position_of_half_R + 2;

        var character_right_to_probable_position_of_Z =
          modified_substring.charAt(probable_position_of_Z + 1);

        // trying to find non-maatra position right to probable_position_of_Z .

        while (
          set_of_matras.indexOf(character_right_to_probable_position_of_Z) != -1
        ) {
          probable_position_of_Z = probable_position_of_Z + 1;
          character_right_to_probable_position_of_Z = modified_substring.charAt(
            probable_position_of_Z + 1
          );
        } // end of while-05

        string_to_be_replaced = modified_substring.substr(
          position_of_half_R + 2,
          probable_position_of_Z - position_of_half_R - 1
        );
        modified_substring = modified_substring.replace(
          "र्" + string_to_be_replaced,
          string_to_be_replaced + "Z"
        );
        position_of_half_R = modified_substring.indexOf("र्");
      } // end of while-04

      modified_substring = modified_substring.substr(
        0,
        modified_substring.length - 2
      );

      //substitute array_two elements in place of corresponding array_one elements

      for (
        input_symbol_idx = 0;
        input_symbol_idx < array_one_length;
        input_symbol_idx++
      ) {
        idx = 0; // index of the symbol being searched for replacement

        while (idx != -1) {
          //whie-00
          modified_substring = modified_substring.replace(
            array_one[input_symbol_idx],
            array_two[input_symbol_idx]
          );
          idx = modified_substring.indexOf(array_one[input_symbol_idx]);
        } // end of while-00 loop
      } // end of for loop
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  Replace_Symbols( )
} // end of Convert_Unicode_to_Krutidev010 function
module.exports = { kruti_to_unicode, unicode_to_krutidev_10 };
