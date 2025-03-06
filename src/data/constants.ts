export interface Panel {
    name: string;
    Detections: number;
}

export const RP:Panel[] = [
    {
        name: 'Adenovirus',
        Detections: 5
    },
    {
        name: 'Coronavirus 229E',
        Detections: 8
    },
    {
        name: 'Coronavirus HKU1',
        Detections: 1
    },
    {
        name: 'Coronavirus NL63',
        Detections: 3
    },
    {
        name: 'Coronavirus OC43',
        Detections: 2
    },
    {
        name: 'SARS-CoV-2',
        Detections: 18
    },
    {
        name: 'Human Metapneumovirus',
        Detections: 1
    },
    {
        name: 'Human Rhinovirus/Enterovirus',
        Detections: 21
    },
    {
        name: 'Influenza A virus A/H3',
        Detections: 14
    },
    {
        name: 'Influenza A virus A/H1-2009',
        Detections: 19
    },
    {
        name: 'Influenza B virus',
        Detections: 3
    },
    {
        name: 'Parainfluenza virus 1',
        Detections: 1
    },
    {
        name: 'Parainfluenza virus 2',
        Detections: 3
    },
    {
        name: 'Parainfluenza virus 3',
        Detections: 0
    },
    {
        name: 'Parainfluenza virus 4',
        Detections: 1
    },
    {
        name: 'Respiratory syncytial virus',
        Detections: 10
    },
    {
        name: 'Bordetella parapertussis',
        Detections: 0
    },
    {
        name: 'Bordetella pertussis',
        Detections: 1
    },
    {
        name: 'Chlamydia pneumoniae',
        Detections: 0
    },
    {
        name: 'Mycoplasma pneumoniae',
        Detections: 14
    }
];

export const GI:Panel[] = [
    {
        name: 'Adenovirus F40/41',
        Detections: 1
    },
    {
        name: 'Astrovirus',
        Detections: 0
    },
    {
        name: 'Norovirus GI/GII',
        Detections: 23
    },
    {
        name: 'Rotavirus A',
        Detections: 2
    },
    {
        name: 'Sapovirus',
        Detections: 1
    },
    {
        name: 'Clostridioides difficile (toxin A/B)',
        Detections: 18
    },
    {
        name: 'Plesiomonas shigelloides',
        Detections: 0
    },
    {
        name: 'Salmonella',
        Detections: 2
    },
    {
        name: 'Yersinia enterocolitica',
        Detections: 0
    },
    {
        name: 'Vibrio',
        Detections: 0
    },
    {
        name: 'Vibrio cholerae',
        Detections: 0
    },
    {
        name: 'Enteroaggregative E. coli (EAEC)',
        Detections: 5
    },
    {
        name: 'Enteropathogenic E. coli (EPEC)',
        Detections: 8
    },
    {
        name: 'Enterotoxigenic E. coli (ETEC) lt/st',
        Detections: 0
    },
    {
        name: 'Shiga-like toxin-producing E. coli (STEC) stx1/stx2',
        Detections: 2
    },
    {
        name: 'Shigella/Enteroinvasive E. coli (EIEC)',
        Detections: 1
    },
    {
        name: 'Cryptosporidium',
        Detections: 0
    },
    {
        name: 'Cyclospora cayetanensis',
        Detections: 0
    },
    {
        name: 'Entamoeba histolytica',
        Detections: 0
    },
    {
        name: 'Giardia lamblia',
        Detections: 1
    },
]

export const BCID:Panel[] = [
    {
        name: 'Acinetobacter calcoaceticus-baumannii complex',
        Detections: 0
    },
    {
        name: 'Bacteroides fragilis',
        Detections: 1
    },
    {
        name: 'Enterobacter cloacae complex',
        Detections: 2
    },
    {
        name: 'Escherichia coli',
        Detections: 5
    },
    {
        name: 'Klebsiella aerogenes',
        Detections: 0
    },
    {
        name: 'Klebsiella oxytoca',
        Detections: 0
    },
    {
        name: 'Klebsiella pneumonia group',
        Detections: 2
    },
    {
        name: 'Proteus spp.',
        Detections: 1
    },
    {
        name: 'Salmonella spp.',
        Detections: 1
    },
    {
        name: 'Serratia marcescens',
        Detections: 0
    },
    {
        name: 'Haemophilus influenzae',
        Detections: 0
    },
    {
        name: 'Neisseria meningitidis',
        Detections: 0
    },
    {
        name: 'Pseudomonas aeruginosa',
        Detections: 2
    },
    {
        name: 'Stenotrophomonas maltophilia',
        Detections: 0
    },
    {
        name: 'Candida albicans',
        Detections: 3
    },
    {
        name: 'Candida auris',
        Detections: 1
    },
    {
        name: 'Candida glabrata',
        Detections: 0
    },
    {
        name: 'Candida krusei',
        Detections: 0
    },
    {
        name: 'Candida parapsilosis',
        Detections: 0
    },
    {
        name: 'Candida tropicalis',
        Detections: 0
    },
    {
        name: 'Cryptococcus (C. neoformans/C. gattii)',
        Detections: 1
    },
    {
        name: 'Enterococcus faecalis',
        Detections: 2
    },
    {
        name: 'Enterococcus faecium',
        Detections: 1
    },
    {
        name: 'Listeria monocytogenes',
        Detections: 0
    },
    {
        name: 'Staphylococcus aureus',
        Detections: 4
    },
    {
        name: 'Staphylococcus epidermidis',
        Detections: 6
    },
    {
        name: 'Staphylococcus lugdunensis',
        Detections: 0
    },
    {
        name: 'Streptococcus agalactiae',
        Detections: 0
    },
    {
        name: 'Streptococcus pneumoniae',
        Detections: 0
    },
    {
        name: 'Streptococcus pyogenes',
        Detections: 1
    }
]

export const ME: Panel[] = [
    {
        name: 'Escherichia coli K1',
        Detections: 2
    },
    {
        name: 'Haemophilus influenzae',
        Detections: 0
    },
    {
        name: 'Listeria monocytogenes',
        Detections: 0
    },
    {
        name: 'Neisseria meningitidis',
        Detections: 1
    },
    {
        name: 'Streptococcus agalactiae',
        Detections: 3
    },
    {
        name: 'Streptococcus pneumoniae',
        Detections: 1
    },
    {
        name: 'Cytomegalovirus (CMV)',
        Detections: 0
    },
    {
        name: 'Enterovirus (EV)',
        Detections: 2
    },
    {
        name: 'Herpes simplex virus 1 (HSV-1)',
        Detections: 0
    },
    {
        name: 'Herpes simplex virus 2 (HSV-2)',
        Detections: 1
    },
    {
        name: 'Human herpesvirus 6 (HHV-6)',
        Detections: 2
    },
    {
        name: 'Human parechovirus (HPeV)',
        Detections: 0
    },
    {
        name: 'Varicella zoster virus (VZV)',
        Detections: 4
    },
    {
        name: 'Cryptococcus (C. neoformans/C. gattii)',
        Detections: 3
    }
]