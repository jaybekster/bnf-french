start
  = ThreeDigitNumber

ThreeDigitNumber
  = a:(FPZD/ SPZD) " "+ "cent " b:NumbersToHundred  { return a*100 + b; }
  / a:(FPZD/ SPZD) " "+ "cent-" b:NumbersToTwenty  { return a*100 + b; }
  / a:(FPZD/ SPZD) " "+ "cents" { return a*100; }
  / "cent " b:NumbersToHundred { return 100 + b; }
  / "cent-" b:NumbersToTwenty { return 100 + b; }
  / "cent" { return 100; }
  / NumbersToHundred
  / "zero" { return 0; }

NumbersToHundred
  = NumbersFromSixtyToHundred
  / NumbersToSixty

NumbersFromSixtyToHundred
  = "soixante" "-" i:(SPFD / CO / FPZD / SPZD / FMFD / FPFD) { return 60 + i; }
  / "soixante" "-et-" SMFD { return 71; }
  / "soixante" { return 60; }
  / "quatre-vingts" "-" i:(CO / FPZD / SPZD) { return 80 + i; }
  / "quatre-vingts" { return 80; }
  / "quatre-vingt" "-" i:(SPFD / FMFD / SMFD / FPFD) { return 80 + i; }
  / "quatre-vingt" { return 90; }

NumbersToSixty
  = a:FPSD "-" b:(CO / FPZD / SPZD) { return a*10 +b; }
  / a:FPSD { return a*10; }
  / NumbersToTwenty

FPSD
  = "cinquante" { return 5; }
  / "quarante" { return 4; }
  / "trente" { return 3; }
  / "vingt" { return 2; }

CO
  = "et-"  SO { return 1; }

NumbersToTwenty
  = SPFD
  / FPFD
  / SMFD
  / FMFD
  / SPZD
  / FPZD
  / SO

SPFD
  = FMFD "-" i:SPZD { return 10 + i; }

FPFD
  = "seize" { return 16; }
  / "quinze" { return 15; }
  / "quatorze" { return 14; }
  / "treize" { return 13; }
  / "douze" { return 12; }

SMFD
  = "onze" { return 11; }

FMFD
  = "dix" { return 10; }

SPZD
  = "neuf" { return 9; }
  / "huit" { return 8; }
  / "sept" { return 7; }

FPZD
  = "six" { return 6; }
  / "cinq" { return 5; }
  / "quatre" { return 4; }
  / "trois" { return 3; }
  / "deux" { return 2; }

SO
  = "un" { return 1; }