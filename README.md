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
    1. Digit After Right Bracket

# Fixed Bugs :
    1. More Than One Decimal In A Number

# Features To Be Added :
    1. Responsiveness
    2. More Calculator Buttons
    3. Toggle Between Light And Dark Mode