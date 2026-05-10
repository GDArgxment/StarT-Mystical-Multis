// Recipes will remain unchanged
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:large_mystical_greenhouse'), 
        [
        'SAP',
        'EHE',
        'CAC',
        ],
    {
        P: 'gtceu:double_rhodium_plated_palladium_plate',
        A: '#gtceu:circuits/iv',
        S: 'gtceu:ev_sensor',
        E: 'gtceu:ev_emitter',
        H: 'gtceu:clean_machine_casing',
        C: 'gtceu:platinum_single_cable'
    });

    event.shaped(
        Item.of('gtceu:large_essence_burner'), 
        [
        'XVX',
        'YTY',
        'GVG',
        ],
    {
        X: 'gtceu:double_titanium_plate',
        V: '#gtceu:circuits/luv',
        Y: 'gtceu:iv_emitter',
        T: 'gtceu:iv_essence_burner',
        G: 'gtceu:niobium_titanium_single_cable'
    });
});



