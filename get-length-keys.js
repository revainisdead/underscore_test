_ = require("underscore")

let reels = [
    {
        "bin_location": "18A06",
        "container_type": "shipping",
        "deleted": false,
        "description": "48-REEL9",
        "erp_transactions": [],
        "id": 32886,
        "original_bin_location": "00SB00",
        "plant_code": "2009",
        "plant_name": "Tulsa ESP Mfg",
        "reel_number": "13573649",
        "reel_position": 0,
        "reel_size": null,
        "segments": [
            {
                "batch_number": "4513536",
                "bin_location": "00SB00",
                "cable_equipment_type": "cable",
                "container_type": "shipping",
                "customer_owned": false,
                "deleted": false,
                "dispose_material_doc": null,
                "disposition": "add_co",
                "erp_transactions": [],
                "expected_length": 700,
                "failed_length": 0,
                "id": 68355,
                "imported_from_ocm": false,
                "imported_on_reel": true,
                "include_surface": false,
                "initial_equipment": "13538061",
                "installed_date": null,
                "installed_time": null,
                "is_cable_move_segment": false,
                "is_mle_backup": false,
                "job": "H249002-JOB-3486",
                "lot_number": "12/23/2020",
                "material_description": "CBL,2FLT,5KV,EPDM,HVY LD,20GLV,2XPFTE.",
                "material_long_description": "CBL,2FLT,5KV,EPDM,HVY LD,20GLV,2XPFTE.",
                "material_number": "ZCUS1152084",
                "material_type": "ZCUS",
                "original_batch_number": null,
                "original_bin_location": "00SB00",
                "original_reel": "13573649",
                "original_reel_description": "48-REEL9",
                "original_reel_segment_position": 1,
                "original_serial_number": null,
                "parent_equipment": "13597980",
                "plant_code": "2009",
                "plant_name": "Tulsa ESP Mfg",
                "price": null,
                "received_length": 700,
                "replaced_type": "",
                "reservation_line_number": null,
                "reservation_number": null,
                "return_mle": null,
                "run_number": 0,
                "scrap_length": 0,
                "segment_position": 1,
                "segment_type": "ZCUS",
                "serial_number": "13598063",
                "serialized": true,
                "split_length": 0,
                "storage_location": "1111",
                "surface_length": 0,
                "technical_id": "12/23/2020_48-REEL9",
                "test_number": null,
                "test_segment": null,
                "ticket_number": "H260361-CT-211202-163904",
                "ticket_status": "in_progress",
                "total_length": 700,
                "trade_uom": null,
                "uom": "FT",
                "primary_status": "00CI",
                "availability_status": "00AV",
                "location_status": "",
                "condition_status": "00TP",
                "scheduled_status": "",
                "billing_status": "",
                "plant": {
                    "id": "2009",
                    "name": "Tulsa ESP Mfg"
                },
                "primary_status_int": 2,
                "hasDisposition": true,
                "splice": null,
                "positionError": null
            }
        ],
        "storage_location_code": "1111",
        "storage_location_description": "Primary Stock",
        "tests": [],
        "plant": {
            "id": "2009",
            "name": "Tulsa ESP Mfg"
        },
        "splicesHidden": true
    },
    {
        "bin_location": "18A06",
        "container_type": "shipping",
        "deleted": false,
        "description": "48-TEST032",
        "erp_transactions": [],
        "id": 32885,
        "original_bin_location": "00SB00",
        "plant_code": "2009",
        "plant_name": "Tulsa ESP Mfg",
        "reel_number": "13576957",
        "reel_position": 0,
        "reel_size": null,
        "segments": [
            {
                "batch_number": "4467856",
                "bin_location": "00SB00",
                "cable_equipment_type": "cable",
                "container_type": "shipping",
                "customer_owned": false,
                "deleted": false,
                "dispose_material_doc": null,
                "disposition": "add_sale",
                "erp_transactions": [],
                "expected_length": 1000,
                "failed_length": 0,
                "id": 68354,
                "imported_from_ocm": false,
                "imported_on_reel": true,
                "include_surface": false,
                "initial_equipment": "13536087",
                "installed_date": null,
                "installed_time": null,
                "is_cable_move_segment": false,
                "is_mle_backup": false,
                "job": "H249002-JOB-3486",
                "lot_number": "12/23/2020",
                "material_description": "CBL,2FLT,5KV,EPDM,HVY LD,20GLV,2XPFTE.",
                "material_long_description": "CBL,2FLT,5KV,EPDM,HVY LD,20GLV,2XPFTE.",
                "material_number": "1152084",
                "material_type": "ZFSP",
                "original_batch_number": null,
                "original_bin_location": "00SB00",
                "original_reel": "13576957",
                "original_reel_description": "48-TEST032",
                "original_reel_segment_position": 1,
                "original_serial_number": null,
                "parent_equipment": "13536087",
                "plant_code": "2009",
                "plant_name": "Tulsa ESP Mfg",
                "price": null,
                "received_length": 1000,
                "replaced_type": "",
                "reservation_line_number": null,
                "reservation_number": null,
                "return_mle": null,
                "run_number": 0,
                "scrap_length": 0,
                "segment_position": 1,
                "segment_type": "ZFSP",
                "serial_number": "13536087",
                "serialized": true,
                "split_length": 0,
                "storage_location": "1111",
                "surface_length": 0,
                "technical_id": "12/23/2020_48-TEST032",
                "test_number": null,
                "test_segment": null,
                "ticket_number": "H260361-CT-211202-163904",
                "ticket_status": "in_progress",
                "total_length": 1000,
                "trade_uom": null,
                "uom": "FT",
                "primary_status": "000N",
                "availability_status": "00AV",
                "location_status": "",
                "condition_status": "",
                "scheduled_status": "",
                "billing_status": "",
                "plant": {
                    "id": "2009",
                    "name": "Tulsa ESP Mfg"
                },
                "primary_status_int": 4,
                "hasDisposition": true,
                "splice": null,
                "positionError": null
            }
        ],
        "storage_location_code": "1111",
        "storage_location_description": "Primary Stock",
        "tests": [],
        "plant": {
            "id": "2009",
            "name": "Tulsa ESP Mfg"
        },
        "splicesHidden": true
    }
]




//seg = _.chain(temp1).map((reel) => reel.segments).flatten().forEach((item) => console.log(item)).value()[0]

let justLengthKeys = _.chain(reels)
    .map((reel) => reel.segments)
    .flatten()
    .filter((seg) => {
        //_.keys(seg).forEach((prop) => {
        //    if (prop.includes("length")) {
        //        return value;
        //    }
        //})

        //let newKeys = _.keys(seg).filter((prop) => prop.includes("length"))

        // we have keys from each segment
        // create a set and just add keys to it
        // on each interation, and it'll just have unique values

    })
    .value()

console.log(justLengthKeys)

