export const popoverAPI = [
  {
    id: 1,
    propsName: 'trigger',
    propsType: ['hover', 'click'],
    propsDescription: 'Defines the interaction trigger for the popover.',
    default: 'click',
  },
  {
    id: 2,
    propsName: 'children',
    propsType: ['ReactNode'],
    propsDescription: 'Content that triggers the popover when interacted with.',
    default: 'Button',
  },
  {
    id: 3,
    propsName: 'additinalContent',
    propsType: ['ReactNode'],
    propsDescription: 'Additional content to be displayed within the popover.',
    default: 'None',
  },
  {
    id: 4,
    propsName: 'title',
    propsType: ['string'],
    propsDescription: 'Title or heading for the popover content.',
    default: 'Popover Title',
  },
  {
    id: 5,
    propsName: 'description',
    propsType: ['string'],
    propsDescription: 'Additional text description for the popover content.',
    default: 'Description',
  },
  {
    id: 6,
    propsName: 'icon',
    propsType: ['ReactNode'],
    propsDescription: 'Icon to be displayed within the popover.',
    default: 'Xcricle',
  },
  {
    id: 7,
    propsName: 'customClass',
    propsType: ['string'],
    propsDescription: 'Custom CSS class for styling the popover.',
    default: 'None',
  },
  {
    id: 8,
    propsName: 'position',
    propsType: [
      'top',
      'top-end',
      'top-start',
      'bottom',
      'bottom-end',
      'bottom-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
    ],
    propsDescription: 'Defines the position of the popover relative to the trigger element.',
    default: 'bottom-start',
  },
]