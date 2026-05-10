GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_mystical_greenhouse', 'multiblock')
        // Can be rotated, but cannot face the sky or the floor
        .rotationState(RotationState.NON_Y_AXIS)
        // Recipes is gonna execute during its work
        .recipeType('greenhouse_growing')
        // Habilities
            // TODO: change poc with non perfect oc, due to balancing 
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        // How the controller will look
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        // Pattern of the multiblock
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HFFFH','HFKFH','HFFFH') 
            .aisle('FFFFF','FR RF','FFFFF')
            .aisle('FFFFF','F R F','FFFFF') 
            .aisle('FFFFF','FR RF','FFFFF') 
            .aisle('HFFFH','HF@FH','HFFFH')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where(' ', Predicates.any())
                .where('R', Predicates.blocks('gtceu:stainless_steel_gearbox'))
                .where('K', Predicates.blocks('gtceu:nichrome_coil_block'))
            // ".or" defines that the block can be replaced with the following predicates
                .where('F', Predicates.blocks('gtceu:clean_machine_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            // direct call to GTMaterials.java, this allows frames to have anything inside; as pipes, wires, ducts, etc... without unforming
                .where('H', Predicates.frames(GTMaterials.StainlessSteel))
                .build()
        )
        .workableCasingRenderer(
            // What will be rendered above IO, Maintenance, Parallel, energy hatches when the multi forms
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            // What texture will use the controller face
            'gtceu:block/multiblock/gcym/large_extruder', 
            // Does someone knows what the hell this line does???????????
                false);

    event.create('large_essence_burner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_burning')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:stable_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FPPPF','FPPPF','PPPPP')
            .aisle('PPPPP','PKOKP','PLLLP')
            .aisle('PPPPP','POKOP','PLLLP')
            .aisle('PPPPP','POKOP','PLLLP')
            .aisle('PPPPP','PKOKP','PLLLP')
            .aisle('FPPPF','FP@PF','PPPPP')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where(' ', Predicates.any())
                .where('L', Predicates.blocks('gtceu:tempered_glass'))
                .where('K', Predicates.blocks('gtceu:titanium_gearbox'))
                .where('O', Predicates.blocks('gtceu:titanium_pipe_casing'))
                .where('P', Predicates.blocks('gtceu:stable_machine_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where('F', Predicates.frames(GTMaterials.Titanium))
                .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/multiblock/gcym/large_extruder', 
                false);

})
