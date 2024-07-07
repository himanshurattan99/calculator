# calculator

# Invalid Syntaxes Considered While Writing JavaScript Code:
    1. Operators :
        -> Two Consecutive Arithmetic Operators   :  +*
        -> Decimal Before Operator                :  .+
        -> Decimal After Operator                 :  +.
    
    2. Decimal :
        -> Decimal After Another Decimal          :  5..
        -> No Digit After Decimal                 :  5.
        -> No Digit Before Decimal                :  .5
        -> More Than One Decimal In A Number      :  5.5.5
        -> Operator After Decimal                 :  .+
        -> Operator Before Decimal                :  +.
        -> Bracket After Decimal                  :  .(
        -> Bracket Before Decimal                 :  (.
    
    3. Brackets :
        -> Right Bracket In Beginning             :  )5+3
        -> Digit Before Left Bracket              :  5(3)
        -> Digit After Right Bracket              :  (5+3)2
        -> Right Bracket Without Left Bracket     :  5)
        -> Unclosed Left Bracket                  :  5*(3/(6+2)
        -> More Right Brackets Than Left Brackets :  5*(3/(6+2)))
        
# Bugs :

# Fixed Bugs :
    1. More Than One Decimal In A Number
    2. Digit After Right Bracket

# Light And Dark Theme Hex Color Codes :
    1. Dark Mode :
       -> Body :
              Background Color : #1B1B1B
       -> Nav Bar And Header :
              Background Color : #0076CE
              Text Color       : #E0FFFF
       -> Theme Button :
              Background Color : #323232
              Text Color       : #00BFFF
       -> Theme Button On Hover:
              Background Color : #FFF9F9
              Text Color       : #00BFFF
       -> Input Field :
              Background Color : #1B1B1B
              Text Color       : #7B7B7B
       -> Output Field :
              Background Color : #1B1B1B
              Text Color       : #00BFFF
       -> Operator Buttons :
              Background Color : #0076CE
              Text Color       : #E0FFFF
       -> Operator Buttons On Hover :
              Background Color : #003C69
              Text Color       : #E0FFFF
       -> Other Buttons :
              Background Color : #323232
              Text Color       : #00BFFF
       -> Other Buttons On Hover :
              Background Color : #232323
              Text Color       : #97E5FF

    2. Light Mode :
       -> Body :
              Background Color : #CAF4FF
       -> Nav Bar And Header :
              Background Color : #00BFFF
              Text Color       : #E0FFFF
       -> Theme Button :
              Background Color : #FFF9F9
              Text Color       : #00BFFF
       -> Theme Button On Hover:
              Background Color : #323232
              Text Color       : #00BFFF
       -> Input Field :
              Background Color : #CAF4FF
              Text Color       : #00BFFF
       -> Output Field :
              Background Color : #CAF4FF
              Text Color       : #2C9CFE
       -> Operator Buttons :
              Background Color : #96EFFF
              Text Color       : #2C9CFE
       -> Operator Buttons On Hover :
              Background Color : #72EAFF
              Text Color       : #FFF9F9
       -> Other Buttons :
              Background Color : #EFEFEF
              Text Color       : #00BFFF
       -> Other Buttons On Hover :
              Background Color : #FFF9F9
              Text Color       : #2C9CFE

# Features To Be Added :
    1. Responsiveness
    2. More Calculator Buttons